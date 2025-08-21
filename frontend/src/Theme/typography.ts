import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { gray, mecGrey, secondary, themePalette } from "./colors";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    [key: string]: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  [key: string]: React.CSSProperties | any;
}

export const typographyTheme = createTheme(themePalette, {
  typography: {
    fontFamily: "Inter, sans-serif",
    MN: {
      fontSize: "12px",
      color: themePalette.palette.primary.main,
    },
    logo: {
      color: themePalette.palette.mecGray.extraDark,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "16px",
    },
    cardTitle: {
      color: mecGrey[550],
      fontSize: "26px",
      lineHeight: "22px",
      fontWeight: 600,
    },
    card_h2: {
      fontSize: "48px",
      color: mecGrey[550],
      fontWeight: 550,
    },
    card_text1: {
      color: mecGrey[555],
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: 400,
    },
    mec_body: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    card_click: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      color: themePalette.palette.secondary.main,
    },
    summary_card_label: {
      color: gray[550],
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: 400,
    },
    summary_card_h2: {
      color: secondary[500],
      fontSize: "24px",
      lineHeight: "28px",
      fontWeight: 400,
    },
    mec_body_12: {
      color: mecGrey[550],
      fontSize: "12px",
      lineHeight: "14px",
      fontWeight: 500,
    },
    mec_body_10: {
      color: mecGrey[555],
      fontSize: "10px",
      lineHeight: "12px",
      fontWeight: 300,
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export default typographyTheme;
