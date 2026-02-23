import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import styles from "./SearchSection.module.css";
import { useSearch } from "../../hooks/useSearch";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import FmdBadOutlinedIcon from "@mui/icons-material/FmdBadOutlined";
import { ClickAwayListener, Fade, Paper } from "@mui/material";
export const SearchSection = () => {
  const {
    queryString,
    setQueryString,
    id,
    isMenuOpen,
    setIsInputActive,
    locationsQuery: { data: locations = [], isFetching, isFetched },
    handleLocationSelection,
  } = useSearch();
  return (
    <Box component="section" className={styles["search-section"]}>
      <Typography variant="h1" sx={{ m: "4.8rem 0 6.4rem 0" }}>
        How's the sky looking today?
      </Typography>
      <ClickAwayListener
        onClickAway={() => {
          setIsInputActive(false);
        }}
      >
        <Box
          aria-describedby={id}
          className={styles["search-component"]}
          // sx={{ border: "1px solid green" }}
        >
          <Box className={styles["search-field"]}>
            <SearchOutlinedIcon
              sx={{
                height: "3.2rem",
                width: "3.2rem",
                mr: 1,
                color: "inherit",
              }}
            />
            <input
              type="text"
              placeholder="Search for a place..."
              value={queryString}
              onSelect={() => setIsInputActive(true)}
              // onBlur={() => setIsInputActive(false)}
              onChange={(e) => {
                setQueryString(e.target.value);
              }}
            />
          </Box>
          <Fade id={id} in={isMenuOpen}>
            <Paper
              sx={{
                width: "100%",
                position: "absolute",
                top: "calc(100% + 1rem)",
                // maxHeight: "35rem",
                // overflowY: "scroll",
                left: 0,
                zIndex: 10,
              }}
            >
              <List>
                {isFetching ? (
                  <ListItem dense>
                    <ListItemAvatar>
                      <CircularProgress
                        sx={{ fontSize: "1rem", color: "#acacac" }}
                      />
                    </ListItemAvatar>
                    <ListItemText primary={"Search in progress..."} />
                  </ListItem>
                ) : isFetched && locations.length > 0 ? (
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
                      latitude,
                      longitude,
                    }) => {
                      const locationDetails =
                        [admin4, admin3, admin2, admin1]
                          .filter(Boolean)
                          .join(", ") + `, ${country}.`;
                      return (
                        <ListItemButton
                          dense
                          key={id}
                          onClick={() =>
                            handleLocationSelection({
                              name,
                              locationDetails,
                              coordinates: {
                                latitude,
                                longitude,
                              },
                            })
                          }
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img
                                src={`https://flagcdn.com/${country_code.toLowerCase()}.svg`}
                                alt={name}
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
                ) : (
                  <ListItem dense>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "transparent" }}>
                        <FmdBadOutlinedIcon
                          sx={{ fontSize: "3.8rem", color: "#acacac" }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={"No results found."} />
                  </ListItem>
                )}
              </List>
            </Paper>
          </Fade>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};
{
  /* <SearchButton variant="contained">Search</SearchButton> */
}
