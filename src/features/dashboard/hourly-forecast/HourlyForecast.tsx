import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import styles from "./HourlyForecast.module.css";
import { MenuDays } from "./menu/MenuDays";
import { listItemStyles, listStyles } from "./HourlyForecast.styles";
import { useHourlyForecast } from "../../../hooks/useHourlyForecast";
import { getWeatherIcon } from "../../../helpers/getWeatherIcon";
import { getShortHour } from "../../../helpers/getShortHour";
export const HourlyForecast = () => {
  const {
    selectedDay,
    setSelectedDay,
    hourlyForecastForTheWeek,
    isFetchingFromOpenMeteo,
  } = useHourlyForecast();
  return (
    <Box className={styles["hourly-forecast-block"]}>
      <Box className={styles["forecast-heading"]}>
        <Typography variant="h2" sx={{ fontWeight: 400 }}>
          Hourly Forecast
        </Typography>
        <MenuDays
          selectedDay={selectedDay}
          setDay={setSelectedDay}
          forecastForTheWeek={hourlyForecastForTheWeek}
        />
      </Box>
      <List sx={listStyles}>
        {isFetchingFromOpenMeteo ? (
          <>
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
            <div className={styles.skeleton} />
          </>
        ) : (
          hourlyForecastForTheWeek[selectedDay].forecast.map(
            ({ time, code, temperature }) => (
              <ListItem sx={listItemStyles} key={time}>
                <img
                  className={styles.icon}
                  src={`images/weather-icons/${getWeatherIcon(code)}`}
                  alt="Weather Icon"
                />
                <ListItemText primary={getShortHour(new Date(time))} />
                <p>{temperature}°</p>
              </ListItem>
            ),
          )
        )}
      </List>
    </Box>
  );
};
