import {
  getHourlyForecast,
  HourlyForecastOptions,
} from "../actions/get-hourly-forecast";
import { splitHourlyForecast } from "../helpers/splitHourlyForecast";

export const hourlyForecastQuery = (options: HourlyForecastOptions) => ({
  queryFn: () => getHourlyForecast(options),
  queryKey: ["open-meteo", "hourly-forecast", options],
  staleTime: 1000 * 60 * 15,
  refetchOnWindowFocus: false,
  select: (data: any) => splitHourlyForecast(data),
  placeholderData: (previousData: any, _previousQuery: any) => previousData,
});
