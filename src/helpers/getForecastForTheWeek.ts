import { Daily } from "../interfaces/open-meteo.interface";

interface Forecast {
  day: string;
  maxTemperature: string;
  minTemperature: string;
  code: number;
}
export const getForecastForTheWeek = (
  dailyForecastResult: Daily | undefined,
): Forecast[] => {
  const forecastForTheWeek: Forecast[] = [];

  for (
    let index = 0;
    index < (dailyForecastResult?.time.length ?? 0);
    index++
  ) {
    const [yearDigit, monthDigit, dayDigit] = dailyForecastResult
      ? String(dailyForecastResult.time[index]).split("-")
      : [0, 0, 0];
    const dateInstance = new Date(
      Number(yearDigit),
      Number(monthDigit) - 1,
      Number(dayDigit),
    );

    const day = String(
      new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(dateInstance),
    );
    forecastForTheWeek.push({
      code: dailyForecastResult?.weather_code[index] ?? 0,
      day: day,
      maxTemperature:
        dailyForecastResult?.temperature_2m_max[index].toFixed(0) ?? "0",
      minTemperature:
        dailyForecastResult?.temperature_2m_min[index].toFixed(0) ?? "0",
    });
  }
  return forecastForTheWeek;
};
