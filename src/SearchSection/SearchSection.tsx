import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { SearchButton } from "./SearchSection.styles";

import styles from "./SearchSection.module.css";
export const SearchSection = () => {
  return (
    <Box component="section" className={styles["search-section"]}>
      <Typography variant="h1" sx={{ m: "4.8rem 0 6.4rem 0" }}>
        How's the sky looking today?
      </Typography>
      <Box className={styles["search-component"]}>
        <Box className={styles["search-field"]}>
          <SearchOutlinedIcon
            sx={{
              height: "2.4rem",
              width: "2.4rem",
              mr: 1,
              color: "inherit",
            }}
          />
          <input type="text" placeholder="Search for a place..." />
        </Box>
        <SearchButton variant="contained">Search</SearchButton>
      </Box>
    </Box>
  );
};
