// store/redux/slices/chat.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChatMessage {
  _id: string;
  conversationId: string;
  senderId: string;
  text: string;
  timestamp: string;
  readBy: string[];
}

export interface Conversation {
  id: string;
  title: string;
  lastMessage?: {
    text: string;
    timestamp: string;
  };
}

interface ChatState {
  selectedConversation: Conversation | null;
  messages: ChatMessage[];
}

const initialState: ChatState = {
  selectedConversation: null,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedConversation(state, action: PayloadAction<Conversation>) {
      state.selectedConversation = action.payload;
    },
    setMessages(state, action: PayloadAction<ChatMessage[]>) {
      state.messages = action.payload;
    },
    appendMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload);
    },
    clearChatState(state) {
      state.selectedConversation = null;
      state.messages = [];
    },
  },
});

export const {
  setSelectedConversation,
  setMessages,
  appendMessage,
  clearChatState,
} = chatSlice.actions;

export default chatSlice.reducer;
