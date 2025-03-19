import { Stack, Typography } from "@mui/material";
import React from "react";
import ChatWindow from "./ChatWindow";

const Conversation = () => {
  return (
    <Stack height={`91.5vh`} overflow={"auto"}>
      <ChatWindow />
    </Stack>
  );
};

export default Conversation;
