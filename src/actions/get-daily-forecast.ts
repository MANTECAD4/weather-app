import { openMeteoApi } from "../api/open-meteo.api";
import { sleep } from "../helpers/sleep";
import {
  Daily,
  DailyForecastResponse,
} from "../interfaces/open-meteo.interface";
import { TemperatureUnits } from "../interfaces/units";

export interface DailyForecastOptions {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  temperatureUnit: TemperatureUnits;
}

export const getDailyForecast = async (
  options: DailyForecastOptions,
): Promise<Daily> => {
  await sleep(1500);
  const {
    coordinates: { latitude, longitude },
    temperatureUnit,
  } = options;
  const url =
    "/forecast?" +
    `latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    "&timezone=auto" +
    `&temperature_unit=${temperatureUnit}`;

  const {
    data: { daily },
  } = await openMeteoApi.get<DailyForecastResponse>(url);
  return daily;
};
