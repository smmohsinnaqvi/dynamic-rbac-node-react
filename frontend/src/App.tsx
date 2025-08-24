import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import CustomSnackbar from "./Components/SnackBar";

const Content = () => {
  return <div>This is content</div>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomSnackbar />
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
