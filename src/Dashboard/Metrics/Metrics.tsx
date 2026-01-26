import Box from "@mui/material/Box";
import styles from "./Metrics.module.css";
export const Metrics = () => {
  return (
    <Box className={styles["metrics-section"]}>
      {metrics.map(({ data, label }) => (
        <Box key={label} className={styles.metric}>
          <p className={styles.label}>{label}</p>
          <span className={styles.data}>{data}</span>
        </Box>
      ))}
    </Box>
  );
};
const metrics = [
  { label: "Feels like", data: "64°" },
  { label: "Humidity", data: "46%" },
  { label: "Wind", data: "9 mph" },
  { label: "Precipitation", data: "0 In" },
];
