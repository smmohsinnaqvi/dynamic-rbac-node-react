import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageBubble from "./MessageBubble";
import { gray, primary, themePalette } from "../../Theme/colors";
import { assets, Option, PhoneCall, Video } from "../../assets";
import TabIcon from "../../assets/svgs/TabIcon";
import CommonAvatar from "../../Components/Avatar";

const ChatWindow = ({ selectedConversation }) => {
  console.log(selectedConversation);
  const [messages, setMessages] = useState(selectedConversation?.messages);
  const [newMessage, setNewMessage] = useState("");
  const [hovered, setHovered] = useState(null);
  const myMessage = useRef(null);

  useEffect(() => {
    setMessages(selectedConversation?.messages);
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    setMessages([
      ...messages,
      {
        text: newMessage,
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "1 sec ago",
      },
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
        direction={"row"}
        height={"70px"}
        borderBottom={`1px solid ${gray[650]}`}
        px={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ backgroundColor: themePalette.palette.common.white }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <CommonAvatar
            firstName={`${selectedConversation?.name?.split(" ")[0]}`}
            lastName={`${selectedConversation?.name?.split(" ")[1]}`}
          />

          <Typography>{selectedConversation?.name}</Typography>
        </Stack>
        <Stack direction={"row"} px={2} spacing={2}>
          <Stack
            sx={{
              border: `1px solid ${
                hovered === "Phone" ? primary[500] : gray[650]
              }`,
              borderRadius: 2,
              p: 1,
              "&:hover": {
                backgroundColor: themePalette.palette.primary.light,
              },
            }}
            onMouseEnter={() => setHovered("Phone")}
            onMouseLeave={() => setHovered(null)}
          >
            <TabIcon icon={PhoneCall} isActive={hovered === "Phone"} />
          </Stack>

          <Stack
            sx={{
              border: `1px solid ${
                hovered === "Video" ? primary[500] : gray[650]
              }`,
              borderRadius: 2,
              p: 1,
              "&:hover": {
                backgroundColor: themePalette.palette.primary.light,
              },
            }}
            onMouseEnter={() => setHovered("Video")}
            onMouseLeave={() => setHovered(null)}
          >
            <TabIcon icon={Video} isActive={hovered === "Video"} />
          </Stack>
          <Stack
            sx={{
              border: `1px solid ${
                hovered === "Option" ? primary[500] : gray[650]
              }`,
              borderRadius: 2,
              p: 1,
              "&:hover": {
                backgroundColor: themePalette.palette.primary.light,
              },
            }}
            onMouseEnter={() => setHovered("Option")}
            onMouseLeave={() => setHovered(null)}
          >
            <TabIcon icon={Option} isActive={hovered === "Option"} />
          </Stack>
        </Stack>
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
            <MessageBubble
              key={index}
              message={msg}
              isSender={msg?.isSender}
              name={msg?.createdBy}
            />
          ))}
        </Box>
      </Stack>
      <Stack direction='row' spacing={2} px={2} pt={1}>
        <TextField
          fullWidth
          placeholder='Type a message...'
          variant='outlined'
          size='small'
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
          <IconButton color='primary' onClick={handleSendMessage}>
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default ChatWindow;
