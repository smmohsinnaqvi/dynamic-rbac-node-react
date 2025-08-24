import { Server, Socket } from "socket.io";
import { MessageModel } from "../../common/models/Message";
import { ConversationModel } from "../../common/models/Conversation";
import http from "http";

export function initSocketServer() {
  const SOCKET_PORT = process.env.SOCKET_PORT || 9000;
  const socketServer = http.createServer();
  const io = new Server(socketServer, {
    cors: {
      origin: process.env.CLIENT_ORIGIN,
      credentials: true,
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log("🔌 Client connected:", socket.id);

    socket.on("join_room", ({ roomId }) => {
      console.log("ROOM ->", roomId);
      socket.join(roomId);
    });

    socket.on("send_message", async ({ conversationId, senderId, text }) => {
      const msg = await MessageModel.create({
        conversationId,
        sender: senderId,
        text,
        readBy: [senderId],
      });
      await ConversationModel.findByIdAndUpdate(conversationId, {
        lastMessage: { text, timestamp: new Date() },
      });
      io.to(conversationId).emit("receive_message", {
        id: msg._id,
        conversationId,
        senderId,
        text,
        timestamp: msg.createdAt,
        readBy: msg.readBy,
      });
    });

    socket.on("mark_as_read", async ({ conversationId, userId }) => {
      const unread = await MessageModel.find({
        conversationId,
        sender: { $ne: userId },
        readBy: { $ne: userId },
      }).lean();
      await MessageModel.updateMany(
        {
          conversationId,
          sender: { $ne: userId },
          readBy: { $ne: userId },
        },
        { $addToSet: { readBy: userId } }
      );
      io.to(conversationId).emit("messages_read", {
        conversationId,
        userId,
        messageIds: unread.map((m: any) => m._id),
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });
  return io;
}
