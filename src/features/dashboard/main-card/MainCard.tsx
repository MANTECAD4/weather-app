import Typography from "@mui/material/Typography";

import styles from "./MainCard.module.css";
import { useLocation } from "../../../providers/app-state/useLocation";

export const MainCard = () => {
  const { locationDetails, name } = useLocation();

  return (
    <div className={styles.card}>
      <div className={styles["info-block"]}>
        <p className={styles.location}>{name}</p>
        <p className={styles.location}>{locationDetails}</p>
        <Typography className={styles.date}>Tuesday, Aug 5, 2025</Typography>
      </div>
      <div className={styles["temperature-block"]}>
        <img
          src="images/icon-sunny.webp"
          className={styles["weather-icon"]}
          alt="Weather Icon"
        />
        <span className={styles.temperature}>68°</span>
      </div>
    </div>
  );
};
