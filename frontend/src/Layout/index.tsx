import { Box, Stack } from "@mui/material";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "98.5vh",
        overflowY: "hidden",
        pb: 0.5,
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
