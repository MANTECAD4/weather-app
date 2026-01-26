import { Metrics } from "./Metrics/Metrics";
import styles from "./Dashboard.module.css";
import { MainCard } from "./MainCard/MainCard";
import { DailyForecast } from "./DailyForecast/DailyForecast";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
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
