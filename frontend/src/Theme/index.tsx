import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          transition: "all 300ms ease-in-out",
        },
      },
    },
    
  },
});
