import Box from "@mui/material/Box";
import styles from "./Metrics.module.css";
import { FC } from "react";

interface Props {
  metricsData: { label: string; data: string; unit: string }[];
}
export const Metrics: FC<Props> = ({ metricsData }) => {
  return (
    <Box className={styles["metrics-section"]}>
      {metricsData.map(({ data, label, unit }) => (
        <Box key={label} className={styles.metric}>
          <p className={styles.label}>{label}</p>
          <span className={styles.data}>
            {data} {unit}
          </span>
        </Box>
      ))}
    </Box>
  );
};
