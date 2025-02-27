import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "96.5vh",
        overflowY: "hidden",
        py: 1,
        px: 2,
      }}
    >
      {/* <NavBar /> */}
      <SideDrawer />
      <Box
        sx={{
          flex: 1,
          width: 1,
          borderRadius: 4,
          p: 2,
          height: "100%",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
