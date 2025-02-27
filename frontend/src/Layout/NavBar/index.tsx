import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { assets } from "../../assets";
import { deepPurple } from "@mui/material/colors";

const NavBar = () => {
  return (
    <Stack
      direction={"row"}
      width={1}
      height={80}
      sx={{ backgroundColor: "#ffffff" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"2px solid #f0efee"}
    >
      <Stack>
        <Box
          sx={{
            // background: `url(${assets?.logo})`,
            backgroundSize: "cover",
            width: "150px",
            height: "65px",
          }}
        />
      </Stack>
      <Stack
        direction={"row"}
        width={1}
        justifyContent={"end"}
        spacing={4}
        px={4}
      >
        <IconButton
          sx={{ padding: "0px" }}
          disableRipple={true}
          onClick={() => {}}
        >
          <NotificationsIcon />
        </IconButton>
        <IconButton
          sx={{ padding: "0px" }}
          disableRipple={true}
          onClick={() => {}}
        >
          <SettingsIcon />
        </IconButton>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NavBar;
