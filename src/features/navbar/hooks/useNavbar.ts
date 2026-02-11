import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../../../interfaces/units";
import { useUnits } from "../../../providers/app-state/useUnits";
import React, { useState } from "react";

export const useNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);

  const {
    temperatureUnit: temperatureUnits,
    windSpeedUnit: windSpeedUnits,
    precipitationUnit: precipitationUnits,
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
  return {
    anchorEl,
    changeMetrics,
    handleClick,
    isMenuOpen,
    menuSections,
    setAnchorEl,
    usesImperial,
  };
};
