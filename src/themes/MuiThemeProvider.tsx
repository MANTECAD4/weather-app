import { ThemeProvider } from "@emotion/react";
import type { ReactNode } from "react";
import { Theme } from "./Theme";
import { CssBaseline, GlobalStyles } from "@mui/material";

type Props = {
  children: ReactNode;
};
export const MuiThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            transition: `background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              fill 0.3s ease,
              stroke 0.3s ease;
            `,
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};
