import React, { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
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
import { assets } from "../../assets";
import { gray, themePalette } from "../../Theme/colors";
import { useNavigate } from "react-router-dom";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    alignItems: "center",
  },
}));

const SideDrawer = () => {
  const navigate = useNavigate();
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
    {
      icon: "report",
      label: "All Reports",
      route: "/",
    },
    {
      icon: "geography",
      label: "Geography",
      route: "/settings",
    },
    {
      icon: "conversation",
      label: "Conversations",
      route: "/about",
    },
    {
      icon: "deals",
      label: "Deals",
      route: "/about",
    },
    {
      icon: "exports",
      label: "Export",
      route: "/about",
    },
  ];

  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);

  const toggleSideDrawer = () => setSideDrawerOpen(!sideDrawerOpen);
  return (
    // <Box

    // >
    <Stack
      justifyContent={"space-between"}
      sx={{
        width: sideDrawerOpen ? "15%" : "4%",
        minWidth: "70px",
        borderRadius: 2,
        backgroundColor: "#ffffff",
        boxShadow: `${gray[650]} 0px 3px 8px`,
        position: "sticky",
        transition: "width 0.3s ease-in-out",
        height: 1,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Stack
        position={"fixed"}
        width={sideDrawerOpen ? "15.5%" : "4.5%"}
        minWidth={"70px"}
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

      <Stack
        spacing={2}
        direction={"row"}
        width={1}
        alignItems={"center"}
        p={3}
      >
        <img src={assets.orangeFarmLogo} height={32} width={32} alt="" />
        {sideDrawerOpen && <Typography variant="logo">OrangeFarm</Typography>}
      </Stack>
      <Stack flexGrow={2} sx={{ p: 1 }} spacing={2}>
        {menuItems?.map((menuItem) => (
          <StyledMenuItem
            key={menuItem.label}
            onClick={() => navigate(menuItem.route)}
          >
            <ListItemIcon>
              <img src={assets[menuItem?.icon]} height={24} width={24} alt="" />
            </ListItemIcon>
            {sideDrawerOpen && <ListItemText>{menuItem.label}</ListItemText>}
          </StyledMenuItem>
        ))}
      </Stack>
      <Stack p={1} mb={5} spacing={2}>
        <StyledMenuItem sx={{ alignItems: "center" }}>
          <ListItemIcon>
            <Avatar>H</Avatar>
          </ListItemIcon>
          <ListItemText>
            <Stack direction={"column"} px={1}>
              {sideDrawerOpen && (
                <>
                  <Typography>Mohsin Naqvi</Typography>
                  <Chip
                    size="small"
                    sx={{
                      width: "min-content",
                      backgroundColor: themePalette.palette.primary.main,
                      color: themePalette.palette.primary.contrastText,
                    }}
                    label="admin"
                  />
                </>
              )}
            </Stack>
          </ListItemText>
        </StyledMenuItem>
        <StyledMenuItem>
          <Box
            component="img"
            src={assets.logout}
            alt="Logout Icon"
            sx={{ height: 24, width: 24 }}
          />
          {sideDrawerOpen && <ListItemText sx={{ px: 1 }}>Logout</ListItemText>}
        </StyledMenuItem>
      </Stack>
    </Stack>
  );
};

export default SideDrawer;
