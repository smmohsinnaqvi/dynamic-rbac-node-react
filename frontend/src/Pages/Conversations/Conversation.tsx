import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ChatWindow from "./ChatWindow";
import { assets } from "../../assets";
import { gray } from "../../Theme/colors";
import { useAppSelector } from "../../redux/hooks";

const Conversation = () => {
  const selectedConversation = useAppSelector(
    (state) => state?.chat.selectedConversation
  );
  return (
    <Stack height={`91.5vh`}>
      {selectedConversation ? (
        <ChatWindow selectedConversation={selectedConversation} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 1,
            width: 1,
            flexDirection: "column",
          }}
        >
          <Box
            component={"img"}
            src={assets.chatIllustration}
            alt='No messages'
            sx={{ height: 600, width: 600 }}
          />
          {/* <Typography variant="body1" color={gray[800]}>
            Start a conversation
          </Typography> */}
        </Box>
      )}
    </Stack>
  );
};

export default Conversation;
