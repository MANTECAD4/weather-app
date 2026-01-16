import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { MuiThemeProvider } from "./themes/MuiThemeProvider.tsx";
import "./index.css";
import "./general.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </StrictMode>,
);
