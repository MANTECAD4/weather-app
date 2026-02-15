import Typography from "@mui/material/Typography";

import styles from "./CurrentWeather.module.css";
import { Metrics } from "./metrics/Metrics";
import { useCurrentWeather } from "../../../hooks/useCurrentWeather";

import { getWeatherIcon } from "../../../helpers/getWeatherIcon";
import Box from "@mui/material/Box";

export const CurrentWeather = () => {
  const {
    locationDetails,
    name,
    currentWeatherResult,
    metrics,
    isFetchingFromOpenMeteo,
    day,
  } = useCurrentWeather();

  return (
    <>
      {isFetchingFromOpenMeteo ? (
        <Box className={styles.skeleton}>
          <Box className={styles["dots-container"]}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </Box>
          <p className={styles["text-loading"]}>Loading...</p>
        </Box>
      ) : (
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
              {currentWeatherResult?.temperature_2m.toFixed(0) ?? 0}°
            </span>
          </div>
        </div>
      )}
      <Metrics metricsData={metrics} />
    </>
  );
};
