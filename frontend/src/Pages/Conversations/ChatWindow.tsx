import React, { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! How's it going?", isSender: false, timestamp: "2 mins ago" },
    {
      text: "All good! What about you?",
      isSender: true,
      timestamp: "3 mins ago",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  // Ref for the scrollable chat container
  // Ref for the last message element
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([
      ...messages,
      { text: newMessage, isSender: true, timestamp: "1 sec ago" },
    ]);
    setNewMessage("");
  };

  return (
    <Stack p={2} height={1} spacing={1}>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          borderRadius: 2,
        }}
      >
        {messages?.map((msg: any, index) => (
          <MessageBubble
            ref={chatContainerRef}
            key={index}
            message={msg}
            isSender={msg?.isSender}
          />
        ))}
      </Box>

      <Stack
        direction="row"
        spacing={1}
        mt={1}
        // sx={{ position: "fixed", width: 1, bottom: 10 }}
      >
        <TextField
          fullWidth
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ChatWindow;
