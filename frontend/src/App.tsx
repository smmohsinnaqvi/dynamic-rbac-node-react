import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

const Content = () => {
  return <div>This is content</div>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
