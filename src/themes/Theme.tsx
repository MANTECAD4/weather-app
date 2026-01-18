import { createTheme } from "@mui/material";

const bool = true;
export const Theme = createTheme({
  palette: {
    mode: bool ? "dark" : "light",
  },
  typography: {
    //    FONT-SIZE
    // 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
    allVariants: {
      fontFamily: "'DM Sans', sans-serif",
    },
    h1: {
      fontWeight: 700,
      fontSize: "4.8rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      textAlign: "center",
      // fontSize: "9.8rem",
      // lineHeight: 1.167,
      // letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "2rem",
      margin: "1.4rem 0",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontWeight: 400,
      fontSize: "4.8rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400,
      fontSize: "3.6rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400,
      fontSize: "2.4rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500,
      fontSize: "2rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "1.4rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 500,
      fontSize: "1.4rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  spacing: "0.8rem",
});
