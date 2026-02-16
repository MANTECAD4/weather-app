import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";

import BlockFlipped from "@mui/icons-material/BlockFlipped";

import styles from "./ErrorScreen.module.css";
import { menuBtnStyles } from "./navbar/NavbarStyles";
export const ErrorScreen = () => {
  return (
    <Box className={styles["error-screen-container"]}>
      <BlockFlipped sx={{ fontSize: "6.2rem" }} />
      <Typography variant="h1" sx={{ my: "3.2rem" }}>
        Something went wrong
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "2rem", textAlign: "center" }}
      >
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </Typography>
      <Button
        variant="contained"
        sx={{ ...menuBtnStyles, mt: "2.4rem", px: "1.6rem" }}
      >
        <CachedIcon sx={{ fontSize: "2.4rem", mr: "1rem" }} />
        Retry
      </Button>
    </Box>
  );
};
