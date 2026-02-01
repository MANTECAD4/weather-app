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
import { ListItem, ListItemText, Menu } from "@mui/material";
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
        How's the sky looking today?
      </Typography>
      <Box
        aria-describedby={id}
        className={styles["search-component"]}
        // sx={{ border: "1px solid green" }}
      >
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
        <Menu
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
          sx={{
            mt: 1,
          }}
          slotProps={{
            paper: {
              sx: {
                // width: "calc(100% -6.4rem)",
                width: "60rem",
              },
            },
          }}
        >
          <List sx={{ width: "100%" }}>
            {isFetching ? (
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={"Search in progress..."} />
              </ListItem>
            ) : (
              locations.map(
                ({
                  name,
                  country_code,
                  country,
                  admin1,
                  admin2,
                  admin3,
                  admin4,
                  id,
                }) => {
                  const locationDetails = [admin4, admin3, admin2, admin1]
                    .filter(Boolean)
                    .join(", ");
                  return (
                    <ListItemButton dense key={id}>
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
              )
            )}
          </List>
        </Menu>
      </Box>
    </Box>
  );
};
