import { useQuery } from "@tanstack/react-query";
import { useLocation } from "../providers/app-state/useLocation";
import { currentWeatherQuery } from "../queries/current-weather.query";
import { useUnits } from "../providers/app-state/useUnits";

export const useCurrentWeather = () => {
  const { locationDetails, name, locationCoordinates } = useLocation();

  const { precipitationUnit, temperatureUnit, windSpeedUnit } = useUnits();

  const { data: currentWeatherResult } = useQuery(
    currentWeatherQuery({
      coordinates: locationCoordinates,
      precipitationUnit,
      temperatureUnit,
      windSpeedUnit,
    }),
  );

  return {
    currentWeatherResult,
    locationDetails,
    name,
  };
};
