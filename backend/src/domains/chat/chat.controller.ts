import { Service } from "typedi";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { ConversationModel } from "../../common/models/Conversation";
import { MessageModel } from "../../common/models/Message";

@Service()
export class ChatController {
  // GET /chat/user/:userId
  async getUserConversations(req: Request, res: Response): Promise<any> {
    const { userId } = req.params;

    console.log("USER ID:", userId);
    // ✅ Validate userId
    if (!userId) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    try {
      const convos = await ConversationModel.find({
        participants: new mongoose.Types.ObjectId(userId),
      }).lean();

      const result = await Promise.all(
        convos.map(async (c) => {
          const lastMsg = await MessageModel.findOne({ conversationId: c._id })
            .sort({ createdAt: -1 })
            .lean();

          const unreadCount = await MessageModel.countDocuments({
            conversationId: c._id,
            sender: { $ne: new mongoose.Types.ObjectId(userId) },
            readBy: { $ne: new mongoose.Types.ObjectId(userId) },
          });

          let name = c.name || "";
          if (!c.isGroup) {
            const other = c.participants.find(
              (pid) => pid.toString() !== userId
            );
            name = other ? other.toString() : "Unknown";
          }

          return {
            id: c._id,
            name,
            lastMessage: lastMsg?.text || "",
            timestamp: lastMsg?.createdAt,
            unreadCount,
          };
        })
      );

      res.json(result ?? []);
    } catch (err) {
      console.error("ChatController error:", err);
      res.status(500).json({ error: "Failed to fetch conversations" });
    }
  }

  // GET /chat/:conversationId/messages
  async getMessagesForConversation(req: Request, res: Response): Promise<any> {
    const { conversationId } = req.params;

    if (!mongoose.isValidObjectId(conversationId)) {
      return res.status(400).json({ error: "Invalid conversation ID" });
    }

    try {
      const msgs = await MessageModel.find({ conversationId })
        .sort({ createdAt: 1 })
        .lean();

      const formatted = msgs.map((m) => ({
        id: m._id,
        text: m.text,
        sender: m.sender.toString(),
        timestamp: m.createdAt,
        readBy: m.readBy.map((r) => r.toString()),
      }));

      res.json(formatted);
    } catch (err) {
      console.error("ChatController error:", err);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  }

  // POST /chat/:conversationId/read
  async markMessagesRead(req: Request, res: Response): Promise<any> {
    const { conversationId } = req.params;
    const { userId } = req.body;

    if (
      !mongoose.isValidObjectId(conversationId) ||
      !mongoose.isValidObjectId(userId)
    ) {
      return res.status(400).json({ error: "Invalid conversation or user ID" });
    }

    try {
      await MessageModel.updateMany(
        {
          conversationId,
          sender: { $ne: new mongoose.Types.ObjectId(userId) },
          readBy: { $ne: new mongoose.Types.ObjectId(userId) },
        },
        {
          $addToSet: { readBy: new mongoose.Types.ObjectId(userId) },
        }
      );

      res.sendStatus(204);
    } catch (err) {
      console.error("ChatController error:", err);
      res.status(500).json({ error: "Failed to mark messages as read" });
    }
  }
}
