import { FC } from "react";

import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";

import { listItemSubheaderStyles } from "../NavbarStyles";
import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../../../providers/app-state/useUnits";

type Props = {
  header: string;
  active: TemperatureUnits | WindSpeedUnits | PrecipitationUnits;
  options: {
    label: string;
    value: TemperatureUnits | WindSpeedUnits | PrecipitationUnits;
  }[];
  setterFn: Function;
};

export const UnitsMenuItem: FC<Props> = (props) => {
  const { header, options, active, setterFn } = props;
  return (
    <>
      <Divider />
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        sx={listItemSubheaderStyles}
      >
        {header}
      </ListSubheader>
      {options.map(({ label, value }) => (
        <ListItemButton
          key={label}
          selected={value === active}
          onClick={() => setterFn(value)}
        >
          <ListItemText primary={label} />
          {value === active && <CheckIcon />}
        </ListItemButton>
      ))}
    </>
  );
};
