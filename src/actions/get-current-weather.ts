import { sleep } from "../helpers/sleep";
import { openMeteoApi } from "../api/open-meteo.api";
import {
  Current,
  CurrentWeatherResponse,
} from "../interfaces/open-meteo.interface";
import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../interfaces/units";

export interface GetCurentWeatherOptions {
  coordinates: { latitude: number; longitude: number };
  windSpeedUnit: WindSpeedUnits;
  temperatureUnit: TemperatureUnits;
  precipitationUnit: PrecipitationUnits;
}

export const getCurrentWeather = async (
  options: GetCurentWeatherOptions,
): Promise<Current> => {
  await sleep(1500);

  const {
    coordinates: { latitude, longitude },
    windSpeedUnit,
    precipitationUnit,
    temperatureUnit,
  } = options;

  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,precipitation,wind_speed_10m` +
    `&wind_speed_unit=${windSpeedUnit}` +
    "&timezone=auto" +
    `&temperature_unit=${temperatureUnit}` +
    `&precipitation_unit=${precipitationUnit}`;

  const {
    data: { current },
  } = await openMeteoApi.get<CurrentWeatherResponse>(url);

  return current;
};
