import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Popover from "@mui/material/Popover";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./Navbar.module.css";
import { menuBtnStyles, menuItemsStyles } from "./NavbarStyles";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };

  return (
    <Box className={styles.navbar}>
      <img className={styles.logo} src="images/logo.svg" alt="Weather Now" />
      <Button
        id="units-button"
        variant="contained"
        onClick={handleClick}
        disableRipple
        startIcon={
          <SettingsOutlinedIcon sx={{ height: "3.2rem", width: "3.2rem" }} />
        }
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              transition: "transform 0.3s ease",
              transform: isMenuOpen ? "rotate(-180deg)" : "",
            }}
          />
        }
        sx={menuBtnStyles}
      >
        Units
      </Button>

      <Popover
        id="units-button"
        open={isMenuOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
        sx={{ mt: 1.6 }}
      >
        <List
          sx={menuItemsStyles}
          dense
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemText primary="Switch to imperial" />
          </ListItemButton>
          {menuItems.map(({ header, items }) => (
            <React.Fragment key={header}>
              <Divider />
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{
                  fontSize: "1.4rem",
                  pointerEvents: "none",
                  bgcolor: "rgba(55, 55, 55,0.6)",
                }}
              >
                {header}
              </ListSubheader>
              {items.map((item) => (
                <ListItemButton key={item}>
                  <ListItemText primary={item} />
                  <CheckIcon />
                </ListItemButton>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Popover>
    </Box>
  );
};

const menuItems = [
  { header: "Temperature", items: ["Celsius (°C)", "Fahrenheit (°F)"] },
  { header: "Wind Speed", items: ["Km/h", "Mph"] },
  { header: "Precipitation", items: ["Milimeters (mm)", "Inches (in)"] },
];
