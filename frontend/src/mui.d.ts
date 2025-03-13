import {
  PaletteColorOptions,
  PaletteColor,
} from "@mui/material/styles/createPalette";
import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface Palette {
    gray: PaletteColor;
    mecGray: PaletteColor;
  }

  interface PaletteOptions {
    gray: PaletteColorOptions;
    mecGray?: PaletteColorOptions;
  }

  interface PaletteColor {
    extraLight: string;
    extraDark: string;
    inputLabelGray?: string;
    inputPlaceholderGray?: string;
  }

  interface PaletteColorOptions {
    extraLight: string;
    extraDark: string;
    inputLabelGray?: string;
    inputPlaceholderGray?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tertiary: true;
  }
  interface ButtonPropsColorOverrides {
    gray: true; // Custom color
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    inputLabel: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    inputLabel?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    inputLabel: true;
  }
}
