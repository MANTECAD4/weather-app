import { useQuery } from "@tanstack/react-query";
import { dailyForecastQuery } from "../queries/daily-forecast.query";
import { useLocation } from "../providers/app-state/useLocation";
import { useUnits } from "../providers/app-state/useUnits";
import { getForecastForTheWeek } from "../helpers/getForecastForTheWeek";

export const useDailyForecast = () => {
  const { locationCoordinates } = useLocation();
  const { temperatureUnit } = useUnits();
  const { data: dailyForecastResult } = useQuery(
    dailyForecastQuery({
      coordinates: locationCoordinates,
      temperatureUnit,
    }),
  );

  const forecastForTheWeek = getForecastForTheWeek(dailyForecastResult);

  return {
    forecastForTheWeek,
  };
};
