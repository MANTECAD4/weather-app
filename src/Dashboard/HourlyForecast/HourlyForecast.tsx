import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import styles from "./HourlyForecast.module.css";
import { MenuDays } from "./Menu/MenuDays";
import { listItemStyles, listStyles } from "./HourlyForecast.styles";
export const HourlyForecast = () => {
  return (
    <Box className={styles["hourly-forecast-block"]}>
      <Box className={styles["forecast-heading"]}>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Hourly Forecast
        </Typography>
        <MenuDays />
      </Box>
      <List sx={listStyles}>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
        <ListItem sx={listItemStyles}>
          <img
            className={styles.icon}
            src="images/icon-sunny.webp"
            alt="Weather Icon"
          />
          <ListItemText primary="7 PM" />
          <p>20°</p>
        </ListItem>
      </List>
    </Box>
  );
};
