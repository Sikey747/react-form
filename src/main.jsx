import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StyledEngineProvider } from "@mui/material";
import "./assets/style/style.modules.scss";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme/theme.jsx";
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
      <CssBaseline />
        <App />
      </StyledEngineProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
