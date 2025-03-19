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
    timestamp: new Date().setMinutes(new Date().getMinutes() - 15), // 15 minutes ago
    unreadCount: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's catch up tomorrow!",
    timestamp: new Date().setHours(new Date().getHours() - 2), // 2 hours ago
    unreadCount: 0,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 3,
    name: "Project Team",
    lastMessage: "Meeting at 3 PM",
    timestamp: new Date().setDate(new Date().getDate() - 1), // 1 day ago
    unreadCount: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Let's catch up tomorrow!",
    timestamp: new Date().setHours(new Date().getHours() - 2), // 2 hours ago
    unreadCount: 0,
  },
];

const ConversationList = () => {
  return (
    <Stack p={1} height={"91.5vh"} sx={{ overflowY: "auto" }}>
      <List>
        {conversations.map((conv) => (
          <ListItem
            key={conv.id}
            sx={{
              color:
                conv.unreadCount > 0
                  ? themePalette.palette.secondary.main
                  : "white",
              borderRadius: 2,
              width: 1,
              pl: 1,
              mb: 1,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: themePalette.palette.primary.light,
              },
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
