import { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import {
  assets,
  Conversations,
  Customer,
  Dashboard,
  Deals,
  Exports,
  Geography,
  Reports,
  Settings,
} from "../../assets";
import { gray, primary, themePalette } from "../../Theme/colors";
import { useLocation, useNavigate } from "react-router-dom";
import TabIcon from "../../assets/svgs/TabIcon";
import { RouteConstants } from "../../constants/route-constants";
import { PERMISSIONS } from "../../constants/permissions";
import useAppPermission from "../../Hooks/useAppPermission";
import { logout } from "../../redux/slices/auth.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CommonAvatar from "../../Components/Avatar";

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  "&": {
    padding: "12px 12px",
  },
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    alignItems: "center",
    color: themePalette.palette.secondary.main,
  },
}));

const SideDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { user } = useAppSelector((state) => state?.auth);
  const menuItems = [
    {
      icon: Dashboard,
      label: "Dashboard",
      route: RouteConstants.ROUTE_DASHBOARD,
      requiredPermission: [PERMISSIONS.VIEW_DASHBOARD],
    },
    {
      icon: Settings,
      label: "Settings",
      route: RouteConstants.ROUTE_SETTINGS,
      requiredPermission: [PERMISSIONS.VIEW_SETTINGS],
    },
    {
      icon: Customer,
      label: "About",
      route: RouteConstants.ROUTE_ABOUT,
      requiredPermission: [PERMISSIONS.VIEW_ABOUT],
    },
    {
      icon: Reports,
      label: "All Reports",
      route: RouteConstants.ROUTE_REPORTS,
      requiredPermission: [PERMISSIONS.VIEW_REPORTS],
    },
    {
      icon: Geography,
      label: "Project Requirements",
      route: RouteConstants.ROUTE_GEOGRAPHY,
      requiredPermission: [PERMISSIONS.VIEW_GEOGRAPHY],
    },
    {
      icon: Conversations,
      label: "Conversations",
      route: RouteConstants.ROUTE_CONVERSATION,
      // requiredPermission: [],
    },
    {
      icon: Deals,
      label: "Deals",
      route: RouteConstants.ROUTE_DEALS,
      requiredPermission: [PERMISSIONS.VIEW_DEALS],
    },
    {
      icon: Exports,
      label: "Export",
      route: RouteConstants.ROUTE_EXPORT,
      requiredPermission: [PERMISSIONS.VIEW_EXPORT],
    },
  ];

  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);
  const [hovered, setHovered] = useState(null);

  const toggleSideDrawer = () => setSideDrawerOpen(!sideDrawerOpen);

  const handleTabChange = (route: string) => {
    navigate(route);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(RouteConstants.ROUTE_LOGIN);
  };

  const { hasAnyPermission } = useAppPermission();
  return (
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
      <Stack flexGrow={2} sx={{ p: 1 }} spacing={1}>
        {menuItems?.map((menuItem) => {
          const isActive = location.pathname.includes(menuItem.route);
          return (
            (!menuItem.requiredPermission ||
              hasAnyPermission(menuItem.requiredPermission)) && (
              <StyledMenuItem
                sx={{
                  backgroundColor: isActive
                    ? themePalette.palette.primary.light
                    : "transparent",
                  color: isActive
                    ? themePalette.palette.secondary.main
                    : "unset",
                }}
                key={menuItem.label}
                onClick={() => handleTabChange(menuItem.route)}
                onMouseEnter={() => setHovered(menuItem.route)}
                onMouseLeave={() => setHovered(null)}
              >
                <ListItemIcon sx={{ justifyContent: "center" }}>
                  <TabIcon
                    icon={menuItem.icon}
                    isActive={isActive || hovered === menuItem.route}
                  />
                </ListItemIcon>
                {sideDrawerOpen && (
                  <ListItemText>{menuItem.label}</ListItemText>
                )}
              </StyledMenuItem>
            )
          );
        })}
      </Stack>
      <Stack p={1} mb={5} spacing={2}>
        <StyledMenuItem sx={{ alignItems: "center" }}>
          <ListItemIcon>
            <CommonAvatar
              firstName={user?.firstName}
              lastName={user?.lastName}
              size="medium"
            />
          </ListItemIcon>
          <ListItemText>
            <Stack direction={"column"} px={1}>
              {sideDrawerOpen && (
                <>
                  <Typography>{`${user?.firstName} ${user?.lastName}`}</Typography>
                  <Chip
                    size="small"
                    sx={{
                      width: "min-content",
                      backgroundColor: themePalette.palette.primary.main,
                      color: themePalette.palette.primary.contrastText,
                    }}
                    label={`${user?.role}`}
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
          {sideDrawerOpen && (
            <ListItemText sx={{ px: 1 }} onClick={handleLogout}>
              Logout
            </ListItemText>
          )}
        </StyledMenuItem>
      </Stack>
    </Stack>
  );
};

export default SideDrawer;
