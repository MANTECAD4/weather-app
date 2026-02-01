import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { SearchButton } from "./SearchSection.styles";

import styles from "./SearchSection.module.css";
import { useSearch } from "./hooks/useSearch";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import { ListItemText } from "@mui/material";
export const SearchSection = () => {
  const {
    queryString,
    setQueryString,
    id,
    anchorEl,
    isMenuOpen,
    setAnchorEl,
    locationsQuery: { data: locations, isFetching },
    debouncedQueryString,
  } = useSearch();
  return (
    <Box component="section" className={styles["search-section"]}>
      <Typography variant="h1" sx={{ m: "4.8rem 0 6.4rem 0" }}>
        How's the sky looking today? {debouncedQueryString}
      </Typography>
      <Box aria-describedby={id} className={styles["search-component"]}>
        <Box
          className={styles["search-field"]}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <SearchOutlinedIcon
            sx={{
              height: "2.4rem",
              width: "2.4rem",
              mr: 1,
              color: "inherit",
            }}
          />
          <input
            type="text"
            placeholder="Search for a place..."
            value={queryString}
            onChange={(e) => {
              setQueryString(e.target.value);
            }}
          />
        </Box>
        <SearchButton variant="contained">Search</SearchButton>
        <Popover
          id={id}
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          disableAutoFocus
          disablePortal
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ mt: 1, maxHeight: "35rem" }}
        >
          {isFetching ? (
            <p>Loading</p>
          ) : (
            <List sx={{ width: "100%" }}>
              {locations.map(
                ({
                  name,
                  country_code,
                  country,
                  admin1,
                  admin2,
                  admin3,
                  admin4,
                }) => {
                  const locationDetails = [admin4, admin3, admin2, admin1]
                    .filter(Boolean)
                    .join(", ");
                  return (
                    <ListItemButton dense>
                      <ListItemAvatar>
                        <Avatar>
                          <img
                            src={`https://flagcdn.com/${country_code.toLowerCase()}.svg`}
                            alt={name}
                            // width="120%"
                            style={{ height: "100%" }}
                            loading="lazy"
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={name}
                        secondary={`${locationDetails}, ${country}.`}
                      />
                    </ListItemButton>
                  );
                },
              )}
            </List>
          )}
        </Popover>
      </Box>
    </Box>
  );
};
