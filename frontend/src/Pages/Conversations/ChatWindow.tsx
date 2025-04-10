import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBubble from "./MessageBubble";
import { gray, primary, themePalette } from "../../Theme/colors";

const ChatWindow = ({ selectedConversation }) => {
  console.log(selectedConversation);
  const [messages, setMessages] = useState([
    { text: "Hey! How's it going?", isSender: false, timestamp: "2 mins ago" },
    {
      text: "All good! What about you?",
      isSender: true,
      timestamp: "3 mins ago",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const myMessage = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([
      ...messages,
      { text: newMessage, isSender: true, timestamp: "1 sec ago" },
    ]);
    setNewMessage("");
    if (myMessage && myMessage.current) {
      setTimeout(() => {
        myMessage.current.scrollTo({
          top: myMessage.current.scrollHeight,
          behavior: "smooth",
        });
      }, 0);
    }
  };

  return (
    <>
      <Stack
        height={"50px"}
        borderBottom={`1px solid ${gray[650]}`}
        justifyContent={"center"}
        px={2}
      >
        <Typography>{selectedConversation?.name}</Typography>
      </Stack>
      <Stack p={2} height={1} spacing={1} overflow={"auto"} ref={myMessage}>
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            borderRadius: 2,
          }}
        >
          {messages?.map((msg: any, index) => (
            <MessageBubble key={index} message={msg} isSender={msg?.isSender} />
          ))}
        </Box>
      </Stack>
      <Stack direction="row" spacing={2} px={2} pt={1}>
        <TextField
          fullWidth
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Stack
          border={`1px solid ${primary[500]}`}
          borderRadius={2}
          sx={{
            "&:hover": {
              backgroundColor: themePalette.palette.primary.light,
            },
          }}
        >
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default ChatWindow;
