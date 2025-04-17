import React from "react";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";
import { themePalette } from "../../Theme/colors";

const conversations = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    timestamp: new Date().setMinutes(new Date().getMinutes() - 15),
    unreadCount: 2,
    messages: [
      {
        text: "Hey! How's it going?",
        isSender: false,
        createdBy: "John Doe",
        timestamp: "2 mins ago",
      },
      {
        text: "All good! What about you?",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "3 mins ago",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's catch up tomorrow!",
    timestamp: new Date().setHours(new Date().getHours() - 2),
    unreadCount: 0,
    messages: [
      {
        text: "Let's catch up tomorrow!",
        isSender: false,
        createdBy: "Jane Smith",
        timestamp: "2 hours ago",
      },
      {
        text: "Sure, ping me a time.",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "1 hour 55 mins ago",
      },
    ],
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1),
    unreadCount: 5,
    messages: [
      {
        text: "Reminder: Meeting at 3 PM",
        isSender: false,
        createdBy: "Project Team",
        timestamp: "1 day ago",
      },
      {
        text: "Thanks for the reminder!",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "1 day ago",
      },
      {
        text: "Please join on time.",
        isSender: false,
        createdBy: "Project Team",
        timestamp: "23 hours ago",
      },
    ],
  },
  {
    id: 4,
    name: "Dev Group",
    lastMessage: "Pushed the fix to develop",
    timestamp: new Date().setHours(new Date().getHours() - 5),
    unreadCount: 1,
    messages: [
      {
        text: "Bug was due to null ref",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "6 hours ago",
      },
      {
        text: "Pushed the fix to develop",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "5 hours ago",
      },
      {
        text: "Nice, will QA now",
        isSender: false,
        createdBy: "Dev Group",
        timestamp: "4.5 hours ago",
      },
    ],
  },
  {
    id: 5,
    name: "Support",
    lastMessage: "Your ticket has been resolved",
    timestamp: new Date().setDate(new Date().getDate() - 2),
    unreadCount: 0,
    messages: [
      {
        text: "Issue with login",
        isSender: true,
        createdBy: "Mohsin Naqvi",
        timestamp: "3 days ago",
      },
      {
        text: "We're looking into it",
        isSender: false,
        createdBy: "Support",
        timestamp: "3 days ago",
      },
      {
        text: "Your ticket has been resolved",
        isSender: false,
        createdBy: "Support",
        timestamp: "2 days ago",
      },
    ],
  },
];

const ConversationList = ({ selectedConversation, onSelectConversation }) => {
  return (
    <Stack p={1} height={"91vh"} sx={{ overflowY: "auto" }}>
      <List>
        {conversations.map((conv) => (
          <ListItem
            key={conv.id}
            onClick={() => onSelectConversation(conv)}
            sx={{
              color:
                conv.unreadCount > 0
                  ? themePalette.palette.secondary.main
                  : "white",
              borderRadius: 2,
              width: 1,
              px: 2,
              mb: 1,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: themePalette.palette.primary.light,
              },
              backgroundColor:
                selectedConversation?.id === conv?.id
                  ? themePalette.palette.primary.light
                  : "unset",
            }}
          >
            <ListItemText
              primary={
                <Typography
                  fontWeight={conv.unreadCount > 0 ? "bold" : "normal"}
                >
                  {conv.name}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">
                    {conv.lastMessage}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    {conv?.timestamp}
                  </Typography>
                </>
              }
            />
            {conv.unreadCount > 0 && (
              <Badge badgeContent={conv.unreadCount} color="primary" />
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ConversationList;
