import styles from "./MainCard.module.css";
export const MainCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles["info-block"]}>
        <p className={styles.location}>Berlin, Germany</p>
        <p className={styles.date}>Tuesday, Aug 5, 2025</p>
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
