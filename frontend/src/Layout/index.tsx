import { Box, Stack } from "@mui/material";
import ActionBar from "./ActionBar";
import SideDrawer from "./SideDrawer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "99.5vh",
        overflowY: "hidden",
        pb: 0.5,
      }}
    >
      <SideDrawer />
      <Box
        sx={{
          flex: 1,
          width: 1,
          borderRadius: 4,
          px: 1,
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          // mt: 1,
        }}
      >
        {/* {children} */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
