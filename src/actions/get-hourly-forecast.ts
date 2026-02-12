import { openMeteoApi } from "../api/open-meteo.api";
import { sleep } from "../helpers/sleep";
import {
  Hourly,
  HourlyForecastResponse,
} from "../interfaces/open-meteo.interface";
import { TemperatureUnits } from "../interfaces/units";

export interface HourlyForecastOptions {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  temperatureUnit: TemperatureUnits;
}

export const getHourlyForecast = async (
  options: HourlyForecastOptions,
): Promise<Hourly> => {
  const {
    coordinates: { latitude, longitude },
    temperatureUnit,
  } = options;

  await sleep(1500);

  const url =
    "/forecast?" +
    `latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&hourly=temperature_2m,weather_code` +
    `&temperature_unit=${temperatureUnit}`;

  const {
    data: { hourly },
  } = await openMeteoApi.get<HourlyForecastResponse>(url);
  return hourly;
};
