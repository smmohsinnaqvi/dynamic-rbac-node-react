import React, { useEffect, useState } from "react";
import {
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Badge,
} from "@mui/material";
import { themePalette } from "../../Theme/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSelectedConversation } from "../../redux/slices/chat.slice";
import { useGetConversationsQuery } from "../../services/feature/chatApi";

const ConversationList = () => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state?.auth?.user?.userId);
  const selectedConversation = useAppSelector(
    (state) => state?.chat.selectedConversation
  );
  const {
    data: conversationList = [],
    isLoading,
    error,
  } = useGetConversationsQuery(userId!, {
    skip: !userId,
  });
  const handleSelectConversation = (conversation: any) => {
    dispatch(setSelectedConversation(conversation));
  };

  console.log(userId);
  console.log("conversationList", conversationList);

  return (
    <Stack p={1} height={"91vh"} sx={{ overflowY: "auto" }}>
      <List>
        {conversationList.map((conv) => (
          <ListItem
            key={conv.id}
            onClick={() => handleSelectConversation(conv)}
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
                  <Typography variant='body2' color='textSecondary'>
                    {conv.lastMessage}
                  </Typography>
                  <Typography variant='caption' color='gray'>
                    {conv?.timestamp}
                  </Typography>
                </>
              }
            />
            {conv.unreadCount > 0 && (
              <Badge badgeContent={conv.unreadCount} color='primary' />
            )}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default ConversationList;
