import { createTheme, ThemeOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { gray, themePalette } from "./colors";

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
      color: gray[950],
      fontSize: "26px",
      lineHeight: "22px",
      fontWeight: 700,
    },
    mec_body: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export default typographyTheme;
