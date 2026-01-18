import Typography from "@mui/material/Typography";
import styles from "./DailyForecast.module.css";
import { FC } from "react";
import { Skeleton } from "@mui/material";
export const DailyForecast = () => {
  return (
    <>
      <div className={styles["daily-forecast-block"]}>
        <Typography variant="h2">Daily Forecast</Typography>
        <div className={styles["days-list"]}>
          {dailyForecast.map((dayPrediction) => (
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
  icon: string;
  maxTemperature: number;
  minTemperature: number;
};
const MiniCard: FC<Props> = ({ day, icon, maxTemperature, minTemperature }) => {
  return (
    <div className={styles["mini-card"]}>
      <p className={styles["day-label"]}>{day}</p>
      <img className={styles.icon} src={icon} alt="Weather Icon" />
      <div className={styles.temperatures}>
        <span>{maxTemperature}°</span>
        <span>{minTemperature}°</span>
      </div>
    </div>
  );
};

const dailyForecast = [
  {
    day: "Tue",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Wed",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Thu",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Fri",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Sat",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Sun",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
  {
    day: "Mon",
    icon: "images/icon-sunny.webp",
    maxTemperature: 68,
    minTemperature: 57,
  },
];
