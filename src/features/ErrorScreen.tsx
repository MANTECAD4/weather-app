import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";

import BlockFlipped from "@mui/icons-material/BlockFlipped";

import styles from "./ErrorScreen.module.css";
import { menuBtnStyles } from "./navbar/NavbarStyles";
import { useHandleError } from "../providers/app-state/useHandleError";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "../providers/tanstack/TanstackProvider";
export const ErrorScreen = () => {
  const { setError, setHasError } = useHandleError();
  const handleRetry = () => {
    setError(undefined);
    setHasError(false);
    queryClient.invalidateQueries();
  };
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
        onClick={() => handleRetry()}
        sx={{ ...menuBtnStyles, mt: "2.4rem", px: "1.6rem" }}
      >
        <CachedIcon sx={{ fontSize: "2.4rem", mr: "1rem" }} />
        Retry
      </Button>
    </Box>
  );
};
