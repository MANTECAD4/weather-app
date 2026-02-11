import styles from "./Dashboard.module.css";
import { CurrentWeather } from "./current-weather/CurrentWeather";
import { DailyForecast } from "./daily-forecast/DailyForecast";
import { HourlyForecast } from "./hourly-forecast/HourlyForecast";
export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <CurrentWeather />
      <DailyForecast />
      <HourlyForecast />
    </section>
  );
};
