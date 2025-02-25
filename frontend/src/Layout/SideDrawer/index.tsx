import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  styled,
} from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

const SideDrawer = () => {
  const menuItems = ["Home", "Inbox", "Inventory", "Events"];

  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);

  const toggleSideDrawer = () => setSideDrawerOpen(!sideDrawerOpen);
  return (
    <Box
      width={sideDrawerOpen ? "15%" : "5%"}
      height={"100vh"}
      borderRight={`1px solid #f0efee`}
      borderBottom={`1px solid #f0efee`}
      sx={{
        backgroundColor: "#ffffff",
        transition: "width, left, right, 300ms",
      }}
    >
      <Stack
        position={"absolute"}
        width={sideDrawerOpen ? "15.5%" : "5.5%"}
        sx={{ transition: "width, left, right, 300ms" }}
      >
        <IconButton
          sx={{ padding: "0px", display: "flex", justifyContent: "end" }}
          disableRipple={true}
          onClick={toggleSideDrawer}
        >
          {sideDrawerOpen ? (
            <ArrowCircleLeftRoundedIcon fontSize="large" />
          ) : (
            <ArrowCircleRightRoundedIcon fontSize="large" />
          )}
        </IconButton>
      </Stack>
      {sideDrawerOpen && (
        <Stack px={4} spacing={4} py={4}>
          {menuItems?.map((menuItem) => (
            <MenuItem
              disableRipple
              sx={{ "&:hover": { backgroundColor: "red" } }}
            >
              {menuItem}
            </MenuItem>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SideDrawer;
