import { useIsFetching, useQuery } from "@tanstack/react-query";
import { hourlyForecastQuery } from "../queries/hourly-forecast.query";
import { useLocation } from "../providers/app-state/useLocation";
import { useUnits } from "../providers/app-state/useUnits";
import { splitHourlyForecast } from "../helpers/splitHourlyForecast";
import { useMemo, useState } from "react";

export const useHourlyForecast = () => {
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const { locationCoordinates } = useLocation();

  const { temperatureUnit } = useUnits();

  const { data: hourlyForecastForTheWeek = [{ day: "-", forecast: [] }] } =
    useQuery(
      hourlyForecastQuery({
        coordinates: locationCoordinates,
        temperatureUnit,
      }),
    );

  const numQueries = useIsFetching({ queryKey: ["open-meteo"] });
  const isFetchingFromOpenMeteo = useMemo(() => numQueries !== 0, [numQueries]);
  return {
    isFetchingFromOpenMeteo,
    selectedDay,
    setSelectedDay,
    hourlyForecastForTheWeek,
  };
};
