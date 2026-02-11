import {
  getCurrentWeather,
  GetCurentWeatherOptions,
} from "../actions/get-current-weather";

export const currentWeatherQuery = (options: GetCurentWeatherOptions) => ({
  queryFn: () => getCurrentWeather(options),
  queryKey: ["current-weather", options],

  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 15,
});
