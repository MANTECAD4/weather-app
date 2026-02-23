import { useIsFetching, useQuery } from "@tanstack/react-query";
import { useLocation } from "../providers/app-state/useLocation";
import { currentWeatherQuery } from "../queries/current-weather.query";
import { useUnits } from "../providers/app-state/useUnits";
import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../interfaces/units";
import { useMemo } from "react";

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

  const metrics = useMemo(
    () =>
      currentWeatherResult === undefined
        ? [
            {
              label: "Feels like",
              data: "-",
              unit: "",
            },
            {
              label: "Humidity",
              data: "-",
              unit: "",
            },
            {
              label: "Wind",
              data: "-",
              unit: "",
            },
            {
              label: "Precipitation",
              data: "-",
              unit: "",
            },
          ]
        : [
            {
              label: "Feels like",
              data: currentWeatherResult.apparent_temperature.toFixed(0),
              unit: temperatureUnit === TemperatureUnits.CELSIUS ? "°C" : "°F",
            },
            {
              label: "Humidity",
              data: currentWeatherResult.relative_humidity_2m.toString(),
              unit: "%",
            },
            {
              label: "Wind",
              data: currentWeatherResult.wind_speed_10m.toString(),
              unit: windSpeedUnit === WindSpeedUnits.KMH ? "Km/h" : "Mph",
            },
            {
              label: "Precipitation",
              data: currentWeatherResult.precipitation.toString(),
              unit:
                precipitationUnit === PrecipitationUnits.MILIMETERS
                  ? "mm"
                  : "inch",
            },
          ],
    [currentWeatherResult, temperatureUnit, precipitationUnit, windSpeedUnit],
  );

  const numQueries = useIsFetching({ queryKey: ["open-meteo"] });

  const isFetchingFromOpenMeteo = useMemo(() => numQueries !== 0, [numQueries]);

  const dateInstance = currentWeatherResult
    ? new Date(currentWeatherResult.time)
    : new Date();

  const day = String(
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(dateInstance),
  );

  return {
    day,
    isFetchingFromOpenMeteo,
    currentWeatherResult,
    locationDetails,
    name,
    metrics,
  };
};
