import {
  DailyForecastOptions,
  getDailyForecast,
} from "../actions/get-daily-forecast";

export const dailyForecastQuery = (options: DailyForecastOptions) => ({
  queryFn: () => getDailyForecast(options),
  queryKey: ["open-meteo", "daily-forecast", options],
  staleTime: 1000 * 60 * 15,
  refetchOnWindowFocus: false,
  placeholderData: (previousData: any, _previousQuery: any) => previousData,
  enabled:
    options.coordinates.latitude !== 0 && options.coordinates.longitude !== 0,
});
