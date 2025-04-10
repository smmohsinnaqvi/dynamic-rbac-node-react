import { Stack } from "@mui/material";
import React from "react";
import ChatWindow from "./ChatWindow";

const Conversation = ({ selectedConversation }) => {
  return (
    <Stack height={`91.5vh`}>
      <ChatWindow selectedConversation={selectedConversation} />
    </Stack>
  );
};

export default Conversation;
