import { createTheme } from "@mui/material/styles";
import { themePalette } from "./colors";
import typographyTheme from "./typography";
import buttonTheme from "./buttons";

const theme = createTheme({
  palette: themePalette.palette,
  typography: typographyTheme.typography,
  components: buttonTheme.components,
});

export default theme;
