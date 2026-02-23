import {
  getCurrentWeather,
  GetCurentWeatherOptions,
} from "../actions/get-current-weather";

export const currentWeatherQuery = (options: GetCurentWeatherOptions) => ({
  queryFn: () => getCurrentWeather(options),
  queryKey: ["open-meteo", "current-weather", options.coordinates ?? ""],

  refetchOnWindowFocus: false,
  placeholderData: (previousData: any, _previousQuery: any) => previousData,
  staleTime: 1000 * 60 * 15,
});
