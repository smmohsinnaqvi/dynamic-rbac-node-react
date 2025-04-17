import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";
import typographyTheme from "./typography";
import buttonTheme from "./buttons";
import { themeInputs } from "./input";

const theme = createTheme({
  palette: themePalette.palette,
  typography: typographyTheme.typography,
  components: {
    ...buttonTheme.components,
    ...themeInputs.components,
  },
});

export default theme;
