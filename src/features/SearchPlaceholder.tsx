import Box from "@mui/material/Box";
import styles from "./SearchPlaceholder.module.css";
import Typography from "@mui/material/Typography";
export const SearchPlaceholder = () => {
  return (
    <Box className={styles.container}>
      <img
        className={styles["search-something-image"]}
        src="images/clouds.svg"
        alt="Search something image"
      />
      <Typography variant="h2" sx={{ mt: 4.8 }}>
        Search something . . .
      </Typography>
    </Box>
  );
};
