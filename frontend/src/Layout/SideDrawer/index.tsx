import React, { useState } from "react";
import {
  Box,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import MNSvgIcon from "../../assets/svgs/MySvgIcon";
import { assets } from "../../assets";

const SideDrawer = () => {
  const menuItems = [
    {
      icon: "dashboard",
      label: "Dashboard",
      route: "/",
    },
    {
      icon: "settings",
      label: "Settings",
      route: "/settings",
    },
    {
      icon: "customer",
      label: "About",
      route: "/about",
    },
  ];

  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);

  const toggleSideDrawer = () => setSideDrawerOpen(!sideDrawerOpen);
  return (
    <Box
      sx={{
        width: sideDrawerOpen ? "15%" : "5.5%",
        height: 1,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        position: "sticky",
        // top: 0,
        transition: "width 0.3s ease-in-out",
        overflow: "hidden",
      }}
    >
      <Stack position={"fixed"} width={sideDrawerOpen ? "15.5%" : "6%"}>
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

      <Stack
        spacing={2}
        direction={"row"}
        width={1}
        alignItems={"center"}
        p={4}
      >
        <img src={assets.orangeFarmLogo} height={28} width={28} alt="" />
        <Typography
          fontFamily={"Inter,sans-serif"}
          sx={{
            color: "#131313",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "16px",
          }}
          color="textPrimary"
        >
          OrangeFarm
        </Typography>
      </Stack>
      <Stack sx={{ p: 1 }}>
        {menuItems?.map((menuItem) => (
          <MenuItem sx={{ m: 1 }}>
            <ListItemIcon>
              <img src={assets[menuItem?.icon]} height={24} width={24} alt="" />
            </ListItemIcon>
            <ListItemText>{menuItem.label}</ListItemText>
          </MenuItem>
        ))}
      </Stack>
    </Box>
  );
};

export default SideDrawer;
