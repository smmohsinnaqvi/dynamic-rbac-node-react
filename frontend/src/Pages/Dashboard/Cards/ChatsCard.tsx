import React from "react";
import MNGridCard from "../../../Components/MNGridCard";
import { Stack, Typography } from "@mui/material";
import { mecGrey, themePalette } from "../../../Theme/colors";
import CommonAvatar from "../../../Components/Avatar";

const data = [
  {
    id: 1,
    name: "Jane Smith",
    lastMessage: "Meeting rescheduled to 3 PM.",
    timestamp: 1713695400000,
    unreadCount: 3,
  },
  {
    id: 2,
    name: "Alex Johnson",
    lastMessage: "Hey, how are you?",
    timestamp: 1713696900000,
    unreadCount: 1,
  },
  {
    id: 3,
    name: "Emily Brown",
    lastMessage: "Did you see my last message?",
    timestamp: 1713696000000,
    unreadCount: 0,
  },
  {
    id: 4,
    name: "Michael Green",
    lastMessage: "Thanks!",
    timestamp: 1713696600000,
    unreadCount: 0,
  },
];

const ChatsCard = ({ chats = data }) => {
  return (
    <MNGridCard size={{ md: 4 }} sx={{ height: 200 }}>
      <Stack p={2} spacing={2}>
        <Typography variant="cardTitle">Chats</Typography>
        <Typography variant="mec_body" color={mecGrey[555]} fontWeight={400}>
          2 unread messages
        </Typography>
        <Stack direction={"row"} height={1} spacing={1} alignItems={"center"}>
          {chats?.map((chat) => (
            <Stack
              sx={{
                p: 2,
                borderRadius: 5,
                backgroundColor:
                  chat?.unreadCount > 0
                    ? themePalette.palette.primary.light
                    : "unset",
              }}
            >
              <CommonAvatar
                firstName={chat?.name?.split(" ")[0]}
                lastName={chat?.name?.split(" ")[1]}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MNGridCard>
  );
};

export default ChatsCard;
