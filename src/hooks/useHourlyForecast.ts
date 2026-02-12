import { useQuery } from "@tanstack/react-query";
import { hourlyForecastQuery } from "../queries/hourly-forecast.query";
import { useLocation } from "../providers/app-state/useLocation";
import { useUnits } from "../providers/app-state/useUnits";
import {
  DayForecast,
  splitHourlyForecast,
} from "../helpers/splitHourlyForecast";
import { useEffect, useMemo, useState } from "react";

export const useHourlyForecast = () => {
  const { locationCoordinates } = useLocation();

  const { temperatureUnit } = useUnits();

  const { data: hourlyForecastForTheWeek, isFetching } = useQuery(
    hourlyForecastQuery({ coordinates: locationCoordinates, temperatureUnit }),
  );
  const formatedForecastPerDay = useMemo(
    () => splitHourlyForecast(hourlyForecastForTheWeek),
    [hourlyForecastForTheWeek],
  );

  const [selectedForecast, setSelectedForecast] = useState<DayForecast | null>(
    null,
  );

  useEffect(() => {
    setSelectedForecast(formatedForecastPerDay[0] ?? { day: "", forecast: [] });
  }, [setSelectedForecast, formatedForecastPerDay]);

  console.log({ formatedForecastPerDay, selectedForecast });
  return {
    isFetching,
    selectedForecast,
    setSelectedForecast,
    formatedForecastPerDay,
  };
};
