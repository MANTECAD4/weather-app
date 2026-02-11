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

export const CurrentWeather = () => {
  const { locationDetails, name, currentWeatherResult } = useCurrentWeather();
  const { precipitationUnit, temperatureUnit, windSpeedUnit } = useUnits();
  const metrics = [
    {
      label: "Feels like",
      data: currentWeatherResult?.relative_humidity_2m ?? 0,
      unit: temperatureUnit === TemperatureUnits.CELSIUS ? "°C" : "°F",
    },
    {
      label: "Humidity",
      data: currentWeatherResult?.apparent_temperature ?? 0,
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

  return (
    <>
      <div className={styles.card}>
        <div className={styles["info-block"]}>
          <p className={styles.location}>{name}</p>
          <p className={styles["location-details"]}>{locationDetails}</p>
          <Typography className={styles.date}>Tuesday, Aug 5, 2025</Typography>
        </div>
        <div className={styles["temperature-block"]}>
          <img
            src="images/icon-sunny.webp"
            className={styles["weather-icon"]}
            alt="Weather Icon"
          />
          <span className={styles.temperature}>
            {currentWeatherResult?.temperature_2m}°
          </span>
        </div>
      </div>
      <Metrics metricsData={metrics} />
    </>
  );
};
