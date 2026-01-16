import { createTheme } from "@mui/material";

const bool = true;
export const Theme = createTheme({
  palette: {
    mode: bool ? "dark" : "light",
  },
  typography: {
    allVariants: {
      fontFamily: "'DM Sans', sans-serif",
    },
  },
});
