import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { gray, themePalette } from "../../Theme/colors";

const MessageBubble = ({ message, isSender, name }: any) => {
  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isSender ? "flex-end" : "flex-start",
        mb: 1,
        alignItems: "flex-end",
      }}
    >
      {!isSender && (
        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>{initials}</Avatar>
      )}

      <Box
        sx={{
          maxWidth: "60%",
          p: 1.5,
          borderRadius: 2,
          backgroundColor: isSender
            ? gray[400]
            : themePalette.palette.primary.extraLight,
          color: isSender ? "white" : "black",
          textAlign: "left",
        }}
      >
        <Typography variant="body2">{message?.text}</Typography>
        <Typography
          variant="caption"
          sx={{ opacity: 0.7, fontSize: "10px", mt: 0.5 }}
        >
          {message?.timestamp}
        </Typography>
      </Box>

      {isSender && (
        <Avatar sx={{ width: 32, height: 32, ml: 1 }}>{initials}</Avatar>
      )}
    </Box>
  );
};

export default MessageBubble;
