import React from "react";
import { Box, Typography } from "@mui/material";
import { gray, themePalette } from "../../Theme/colors";

const MessageBubble = ({ message, isSender }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isSender ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
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
    </Box>
  );
};

export default MessageBubble;
