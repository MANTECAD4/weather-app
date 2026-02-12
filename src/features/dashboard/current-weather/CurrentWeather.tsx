import Typography from "@mui/material/Typography";

import styles from "./CurrentWeather.module.css";
import { Metrics } from "./metrics/Metrics";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";
import { useUnits } from "../../../providers/app-state/useUnits";
import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../../../interfaces/units";
import { getWeatherIcon } from "../../../helpers/getWeatherIcon";

export const CurrentWeather = () => {
  const { locationDetails, name, currentWeatherResult } = useCurrentWeather();
  const { precipitationUnit, temperatureUnit, windSpeedUnit } = useUnits();
  const metrics = [
    {
      label: "Feels like",
      data: currentWeatherResult?.apparent_temperature ?? 0,
      unit: temperatureUnit === TemperatureUnits.CELSIUS ? "°C" : "°F",
    },
    {
      label: "Humidity",
      data: currentWeatherResult?.relative_humidity_2m ?? 0,
      unit: "%",
    },
    {
      label: "Wind",
      data: currentWeatherResult?.wind_speed_10m ?? 0,
      unit: windSpeedUnit === WindSpeedUnits.KMH ? "Km/h" : "Mph",
    },
    {
      label: "Precipitation",
      data: currentWeatherResult?.precipitation ?? 0,
      unit: precipitationUnit === PrecipitationUnits.MILIMETERS ? "mm" : "inch",
    },
  ];

  const dateInstance = currentWeatherResult
    ? new Date(currentWeatherResult.time)
    : new Date();

  const day = String(
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(dateInstance),
  );

  return (
    <>
      <div className={styles.card}>
        <div className={styles["info-block"]}>
          <p className={styles.location}>{name}</p>
          <p className={styles["location-details"]}>{locationDetails}</p>
          <Typography className={styles.date}>{`${day}`}</Typography>
        </div>
        <div className={styles["temperature-block"]}>
          <img
            src={`images/weather-icons/${getWeatherIcon(currentWeatherResult?.weather_code ?? 0)}`}
            className={styles["weather-icon"]}
            alt="Weather Icon"
          />
          <span className={styles.temperature}>
            {currentWeatherResult?.temperature_2m?.toFixed(0) ?? 0}°
          </span>
        </div>
      </div>
      <Metrics metricsData={metrics} />
    </>
  );
};
