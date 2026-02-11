import Typography from "@mui/material/Typography";
import styles from "./DailyForecast.module.css";
import { FC } from "react";
import { useDailyForecast } from "../../../hooks/useDailyForecast";
import { getWeatherIcon } from "../../../helpers/getWeatherIcon";
// import { Skeleton } from "@mui/material";
export const DailyForecast = () => {
  const { forecastForTheWeek } = useDailyForecast();
  return (
    <>
      <div className={styles["daily-forecast-block"]}>
        <Typography variant="h2" sx={{ my: 2.4 }}>
          Daily Forecast
        </Typography>
        <div className={styles["days-list"]}>
          {forecastForTheWeek.map((dayPrediction) => (
            // <Skeleton sx={{ height: "100%" }} key={day}>
            <MiniCard key={dayPrediction.day} {...dayPrediction} />
            // </Skeleton>
          ))}
        </div>
      </div>
    </>
  );
};

type Props = {
  day: string;
  code: number;
  maxTemperature: string;
  minTemperature: string;
};
const MiniCard: FC<Props> = ({ day, code, maxTemperature, minTemperature }) => {
  return (
    <div className={styles["mini-card"]}>
      <p className={styles["day-label"]}>{day}</p>
      <img
        className={styles.icon}
        src={`images/weather-icons/${getWeatherIcon(code)}`}
        alt="Weather Icon"
      />
      <div className={styles.temperatures}>
        <span>{maxTemperature}°</span>
        <span>{minTemperature}°</span>
      </div>
    </div>
  );
};

// const dailyForecast = [
//   {
//     day: "Tue",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Wed",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Thu",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Fri",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Sat",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Sun",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
//   {
//     day: "Mon",
//     icon: "images/icon-sunny.webp",
//     maxTemperature: 68,
//     minTemperature: 57,
//   },
// ];
