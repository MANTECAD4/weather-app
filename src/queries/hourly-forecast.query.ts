import {
  getHourlyForecast,
  HourlyForecastOptions,
} from "../actions/get-hourly-forecast";

export const hourlyForecastQuery = (options: HourlyForecastOptions) => ({
  queryFn: () => getHourlyForecast(options),
  queryKey: ["hourly-forecast", options],
  staleTime: 1000 * 60 * 15,
  refetchOnWindowFocus: false,
});
