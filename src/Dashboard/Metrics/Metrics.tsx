import styles from "./Metrics.module.css";
export const Metrics = () => {
  return (
    <>
      {metrics.map(({ data, gridArea, label }) => (
        <div key={label} className={styles.metric} style={{ gridArea }}>
          <p className={styles.label}>{label}</p>
          <p className={styles.data}>{data}</p>
        </div>
      ))}
    </>
  );
};
const metrics = [
  { label: "Feels like", data: "64°", gridArea: "feels-like" },
  { label: "Humidity", data: "46%", gridArea: "humidity" },
  { label: "Wind", data: "9 mph", gridArea: "wind" },
  { label: "Precipitation", data: "0 In", gridArea: "precipitation" },
];
