import { Hourly } from "../interfaces/open-meteo.interface";
import { getDayName } from "./getDayName";

export interface DayForecast {
  day: string;
  forecast: FormatedHourlyForecast[];
}
interface FormatedHourlyForecast {
  time: string;
  temperature: string;
  code: number;
}

export const splitHourlyForecast = (
  hourlyForecastForTheWeek: Hourly | undefined,
) => {
  if (!hourlyForecastForTheWeek) return [];

  const { temperature_2m, time, weather_code } = hourlyForecastForTheWeek;

  const formatedForecast: DayForecast[] = [];

  const sliceSize = temperature_2m.length / 7;

  for (let index = 0; index < 7; index++) {
    const dayForecast: FormatedHourlyForecast[] = [];
    for (
      let indexj = index * sliceSize;
      indexj < index * sliceSize + sliceSize;
      indexj++
    ) {
      dayForecast.push({
        time: time[indexj],
        temperature: temperature_2m[indexj].toFixed(0),
        code: weather_code[indexj],
      });
    }
    formatedForecast.push({
      day: getDayName(new Date(dayForecast[0].time), "long"),
      forecast: structuredClone(dayForecast),
    });
  }

  return formatedForecast;
};
