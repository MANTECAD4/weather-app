import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import { menuBtnStyles } from "../../../Navbar/NavbarStyles";

export const MenuDays = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isMenuOpen = Boolean(anchorEl);

  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={isMenuOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          ...menuBtnStyles,
          p: "1.8rem 1.6rem",
          height: "3.2rem",
          // width: "9.8rem",
        }}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              transition: "transform 0.3s ease",
              transform: isMenuOpen ? "rotate(-180deg)" : "",
            }}
          />
        }
      >
        {selectedDay}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={() => setAnchorEl(null)}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
            sx: { width: "100%", minWidth: "22rem" },
          },
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{ mt: 1.6 }}
      >
        {days.map((day) => (
          <MenuItem
            key={day}
            onClick={() => {
              setAnchorEl(null);
              setSelectedDay(day);
            }}
            selected={day === selectedDay}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              //   fontSize: "1.8rem",
            }}
          >
            {day}
            {day === selectedDay ? <CheckIcon /> : null}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
