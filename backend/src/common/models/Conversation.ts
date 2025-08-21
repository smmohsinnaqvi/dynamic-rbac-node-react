import mongoose, { Schema, Document } from "mongoose";

export interface IConversation extends Document {
  participants: mongoose.Types.ObjectId[];
  name?: string;
  isGroup: boolean;
  lastMessage?: {
    text: string;
    timestamp: Date;
  };
}

const ConversationSchema = new Schema<IConversation>(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    name: { type: String },
    isGroup: { type: Boolean, default: false },
    lastMessage: {
      text: String,
      timestamp: Date,
    },
  },
  { timestamps: true }
);

export const ConversationModel = mongoose.model<IConversation>(
  "Conversation",
  ConversationSchema
);
