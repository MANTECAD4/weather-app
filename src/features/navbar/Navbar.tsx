import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Popover from "@mui/material/Popover";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import styles from "./Navbar.module.css";
import { menuBtnStyles, menuItemsStyles } from "./NavbarStyles";

import { UnitsMenuItem } from "./menu/UnitsMenuItem";
import { useIsFetching } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavbar } from "../../hooks/useNavbar";

export const Navbar = () => {
  const {
    entry,
    ref,
    anchorEl,
    changeMetrics,
    handleClick,
    isMenuOpen,
    menuSections,
    setAnchorEl,
    usesImperial,
  } = useNavbar();
  const numQueries = useIsFetching();
  const isFetching = useMemo(() => numQueries !== 0, [numQueries]);

  return (
    <Box ref={ref} className={`${styles.navbar}`}>
      <img className={styles.logo} src="images/logo.svg" alt="Weather Now" />
      <Button
        id="units-button"
        variant="contained"
        onClick={handleClick}
        disableRipple
        disabled={isFetching}
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
          <ListItemButton onClick={() => changeMetrics()}>
            <ListItemText
              primary={usesImperial ? "Switch to Metric" : "Switch to Imperial"}
            />
          </ListItemButton>
          {menuSections.map((sectionData) => (
            <UnitsMenuItem key={sectionData.header} {...sectionData} />
          ))}
        </List>
      </Popover>
    </Box>
  );
};
