import { Metrics } from "./metrics/Metrics";
import styles from "./Dashboard.module.css";
import { MainCard } from "./main-card/MainCard";
import { DailyForecast } from "./daily-forecast/DailyForecast";
import { HourlyForecast } from "./hourly-forecast/HourlyForecast";
export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <MainCard />
      <Metrics />
      <DailyForecast />
      <HourlyForecast />
    </section>
  );
};
