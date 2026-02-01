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
} from "../../../providers/app-state-context/AppState";

// type PropsTemperatureSection = {
//   header: string;
//   active: TemperatureUnits;
//   options: {
//     label: string;
//     value: TemperatureUnits;
//   }[];
//   setterFn: (units: TemperatureUnits) => void;
// };

// type PropsWindSpeedSection = {
//   header: string;
//   active: WindSpeedUnits;
//   options: {
//     label: string;
//     value: WindSpeedUnits;
//   }[];
//   setterFn: (units: WindSpeedUnits) => void;
// };

// type PropsPrecipitationSection = {
//   header: string;
//   active: PrecipitationUnits;
//   options: {
//     label: string;
//     value: PrecipitationUnits;
//   }[];
//   setterFn: (
//     units: TemperatureUnits | WindSpeedUnits | PrecipitationUnits,
//   ) => void;
// };

type Props = {
  header: string;
  active: TemperatureUnits | WindSpeedUnits | PrecipitationUnits;
  options: {
    label: string;
    value: TemperatureUnits | WindSpeedUnits | PrecipitationUnits;
  }[];
  setterFn: (
    units: TemperatureUnits | WindSpeedUnits | PrecipitationUnits,
  ) => void;
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
