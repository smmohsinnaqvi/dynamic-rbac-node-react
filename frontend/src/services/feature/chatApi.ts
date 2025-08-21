// store/api/endpoints/chatApi.ts
import { apiSlice } from "../apiSlice";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query<any[], string>({
      query: (userId) => `/chat/conversations/${userId}`,
      providesTags: ["conversations"],
    }),
    getMessages: builder.query<any[], string>({
      query: (conversationId) => `/chat/messages/${conversationId}`,
      providesTags: (result, error, id) => [{ type: "messages", id }],
    }),
  }),
});

export const { useGetConversationsQuery, useGetMessagesQuery } = chatApi;
