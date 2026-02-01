import React, { useState } from "react";

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
import {
  PrecipitationUnits,
  TemperatureUnits,
  useUnits,
  WindSpeedUnits,
} from "../../providers/app-state-context/AppState";
import { UnitsMenuItem } from "./menu/UnitsMenuItem";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const {
    temperatureUnits,
    windSpeedUnits,
    precipitationUnits,
    setPrecipitationUnits,
    setTemperatureUnits,
    setWindSpeedUnits,
    usesImperial,
    changeMetrics,
  } = useUnits((state) => state);

  const menuSections = [
    {
      header: "Temperature",
      active: temperatureUnits,
      options: [
        { label: "Celsius (°C)", value: TemperatureUnits.CELSIUS },
        { label: "Fahrenheit (°F)", value: TemperatureUnits.FAHRENHEIT },
      ],
      setterFn: setTemperatureUnits,
    },
    {
      header: "Wind Speed",
      active: windSpeedUnits,
      options: [
        { label: "Km/h", value: WindSpeedUnits.KMH },
        { label: "Mph", value: WindSpeedUnits.MPH },
      ],
      setterFn: setWindSpeedUnits,
    },
    {
      header: "Precipitation",
      active: precipitationUnits,
      options: [
        { label: "Milimeters (mm)", value: PrecipitationUnits.MILIMETERS },
        { label: "Inches (in)", value: PrecipitationUnits.INCHES },
      ],
      setterFn: setPrecipitationUnits,
    },
  ];

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

{
  /* {menuItems.map(({ header, items }) => (
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
          ))} */
}

{
  /* <Divider />
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={listItemSubheaderStyles}
          >
            Temperature
          </ListSubheader>
          {temperatureUnitsLabels.map((label) => (
            <ListItemButton key={label}>
              <ListItemText primary={label} />
              <CheckIcon />
            </ListItemButton>
          ))}

          <Divider />
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={listItemSubheaderStyles}
          >
            Wind Speed
          </ListSubheader>
          {windSpeedUnitsLabels.map((label) => (
            <ListItemButton key={label}>
              <ListItemText primary={label} />
              <CheckIcon />
            </ListItemButton>
          ))}

          <Divider />
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={listItemSubheaderStyles}
          >
            Precipitation
          </ListSubheader>
          {precipitationUnitsLabels.map((label) => (
            <ListItemButton key={label}>
              <ListItemText primary={label} />
              <CheckIcon />
            </ListItemButton>
          ))} */
}
