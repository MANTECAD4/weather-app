import { Metrics } from "./Metrics/Metrics";
import styles from "./Dashboard.module.css";
import { MainCard } from "./MainCard/MainCard";
import { DailyForecast } from "./DailyForecast/DailyForecast";
export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <MainCard />
      <div style={{ gridArea: "hourly", backgroundColor: "blue" }} />
      <Metrics />
      {/* <div style={{ gridArea: "daily", backgroundColor: "black" }} /> */}
      <DailyForecast />
    </section>
  );
};
