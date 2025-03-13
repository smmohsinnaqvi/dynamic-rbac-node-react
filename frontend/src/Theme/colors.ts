import { createTheme, PaletteOptions } from "@mui/material";

export const primary = {
  50: "#FFF5E0",
  100: "#FFE5B3",
  200: "#FFD480",
  300: "#FFF7E8",
  400: "#E6B664",
  500: "#FFCD71",
  600: "#FFB226",
  700: "#CC9E57",
  800: "#B3864A",
  900: "#996F3D",
};

export const secondary = {
  500: "#734A00",
};

export const gray = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  750: "#5F5F5F",
  800: "#424242",
  850: "#262626",
  900: "#212121",
  1000: "#656F7D",
};

export const red = {
  50: "#ffeaed",
  75: "#fff3f3",
  100: "#ffc9ce",
  150: "#fee2e2",
  200: "#f09493",
  300: "#e6696a",
  400: "#ef4444",
  500: "#f32e26",
  600: "#e42027",
  650: "#ea5455",
  700: "#d31121",
  800: "#c6011a",
  900: "#b7000c",
};

export const mecGrey = {
  100: "#E7E7E7",
  150: "#F1F1F1",
  200: "#FAFAFA",
  250: "#F0F0F0",
  300: "#E7E7E7",
  350: "#dfe2e6",
  400: "#BDBEC2",
  500: "#ADB3BD",
  600: "#656F7D",
  650: "#9197A1",
  700: "#4F5762",
  800: "#2A2E34",
  900: "#1A1C20",
};

export const green = {
  10: "#DBF4E9",
  50: "#ecf8e6",
  100: "#d0eec0",
  150: "#D4F4E2",
  200: "#b0e297",
  250: "#28C76F",
  270: "#3CC66E",
  300: "#8dd66b",
  350: "#B1E0DF",
  400: "#71cd47",
  450: "#235457",
  500: "#53c41a",
  600: "#42b411",
  700: "#26a001",
  800: "#008c00",
  900: "#006a00",
  950: "#1E9553",
};

export const warning = {
  10: "#FFF9F4",
  50: "#ffe57f",
  150: "#FFFAE5",
  100: "#ffe066",
  200: "#ffdb4c",
  250: "#FFECD9",
  300: "#ffd632",
  350: "#FF9F43",
  400: "#ffd119",
  450: "#FFE0B3",
  500: "#ffcc00",
  600: "#e5b700",
  700: "#cca300",
  800: "#b28e00",
  900: "#997a00",
  950: "#BF7732",
};

export const themePalette = createTheme({
  palette: {
    mode: "light",
    white: {
      DEFAULT: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
      grey: "#cccccc",
    },
    primary: {
      extraLight: primary[100],
      light: primary[300],
      main: primary[500],
      dark: primary[600],
      extraDark: primary[900],
    },
    secondary: {
      extraLight: secondary[100],
      light: secondary[300],
      main: secondary[500],
      dark: secondary[700],
      extraDark: secondary[900],
    },
    gray: {
      extraLight: gray[100],
      light: gray[300],
      main: gray[500],
      dark: gray[600],
      extraDark: gray[900],
      inputLabelGray: gray[800], // for input
      inputLabelGrayDark: gray[1000], // for input
      inputPlaceholderGray: gray[750],
    },
    mecGray: {
      extraLight: mecGrey[100],
      light: mecGrey[300],
      main: mecGrey[600],
      dark: mecGrey[700],
      extraDark: mecGrey[900],
      inputLabelGray: mecGrey[800], // for input
    },
    error: {
      extraLight: red[100],
      light: red[300],
      main: red[500],
      dark: red[700],
      extraDark: red[900],
    },
    success: {
      extraLight: green[100],
      light: green[300],
      main: green[500],
      dark: green[700],
      extraDark: green[900],
    },
    warning: {
      extraLight: warning[50],
      light: warning[100],
      main: warning[500],
      dark: warning[700],
      extraDark: warning[900],
    },
  } as PaletteOptions,
});
