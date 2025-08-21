import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { gray, themePalette } from "../../Theme/colors";
import CommonAvatar from "../../Components/Avatar";

const MessageBubble = ({ message, isSender, name }: any) => {
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
        <CommonAvatar
          firstName={`${name?.split(" ")[0]}`}
          lastName={`${name?.split(" ")[1]}`}
          size="small"
        />
      )}

      <Box
        sx={{
          maxWidth: "60%",
          p: 1.5,
          mx: 1,
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
        <CommonAvatar
          firstName={`${name?.split(" ")[0]}`}
          lastName={`${name?.split(" ")[1]}`}
          size="small"
        />
      )}
    </Box>
  );
};

export default MessageBubble;
