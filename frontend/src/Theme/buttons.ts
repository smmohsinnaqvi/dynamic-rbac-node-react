import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";

const buttonTheme = createTheme(themePalette, {
  palette: themePalette.palette,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
        fontFamily: "Inter",
      },
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "capitalize",
          fontFamily: "Inter",
          minWidth: "fit-content",
          whiteSpace: "nowrap",
        },
        sizeSmall: {
          height: "24px",
          padding: "6px 14px",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "20px",
          fontFamily: "Inter",
        },
        sizeMedium: {
          height: "32px",
          padding: "9px 20px",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "20px",
          fontFamily: "Inter",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: themePalette.palette.primary.main,
            color: themePalette.palette.mecGray.main,
            "&:hover": {
              backgroundColor: themePalette.palette.primary.dark,
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            border: "1px solid #1976D2",
            color: "#1976D2",
            "&:hover": {
              borderColor: "#1565C0",
              backgroundColor: "rgba(25, 118, 210, 0.08)",
            },
          },
        },
        {
          props: { variant: "tertiary", color: "secondary" },
          style: {
            backgroundColor: "transparent",
            color: "#D32F2F",
            "&:hover": {
              color: "#B71C1C",
            },
          },
        },
        {
          props: { variant: "contained", color: "gray" },
          style: {
            backgroundColor: "#BDBDBD",
            color: "#212121",
            "&:hover": {
              backgroundColor: "#9E9E9E",
            },
          },
        },
      ],
    },
  },
});

export default buttonTheme;
