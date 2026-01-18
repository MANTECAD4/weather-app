import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "./SearchSection.module.css";
import { outlinedInputClasses, inputLabelClasses, Button } from "@mui/material";
export const SearchSection = () => {
  return (
    <Box component="section" className={styles["search-section"]}>
      <Typography variant="h1" sx={{ m: "4.8rem 0 6.4rem 0" }}>
        How's the sky looking today?
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "5.2rem",
          width: "100%",
          maxWidth: "70rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 2,
            px: "1.4rem",
            height: "100%",
            color: "#aaa",
            width: "100%",
            // maxWidth: "1rem",
            // border: "1px solid red",
          }}
        >
          <SearchOutlinedIcon
            sx={{ height: "3.2rem", width: "3.2rem", mr: 2, color: "inherit" }}
          />
          <input
            type="text"
            placeholder="Search for a place..."
            className={styles["search-input"]}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            height: "100%",
            backgroundColor: "hsl(233, 67%, 56%)",
            color: "#fff",
            textTransform: "none",
            px: "3.2rem",
            borderRadius: "1.2rem",
            fontWeight: 400,
            ml: 1.6,
            fontSize: "1.8rem",
            /*  height: "4.8rem"  */
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
