import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { MuiThemeProvider } from "./providers/themes/MuiThemeProvider.tsx";
import "./index.css";
import "./general.css";
import { TanstackProvider } from "./providers/tanstack/TanstackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </TanstackProvider>
  </StrictMode>,
);
