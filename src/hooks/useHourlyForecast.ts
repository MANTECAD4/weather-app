import { useQuery } from "@tanstack/react-query";
import { hourlyForecastQuery } from "../queries/hourly-forecast.query";
import { useLocation } from "../providers/app-state/useLocation";
import { useUnits } from "../providers/app-state/useUnits";
import { splitHourlyForecast } from "../helpers/splitHourlyForecast";
import { useState } from "react";
import { getDayName } from "../helpers/getDayName";
import { MenuDays } from "../features/dashboard/hourly-forecast/menu/MenuDays";

export const useHourlyForecast = () => {
  const { locationCoordinates } = useLocation();

  const { temperatureUnit } = useUnits();

  const { data: hourlyForecastForTheWeek } = useQuery(
    hourlyForecastQuery({ coordinates: locationCoordinates, temperatureUnit }),
  );
  const formatedForecastPerDay = splitHourlyForecast(hourlyForecastForTheWeek);
  //   console.log(formatedForecastPerDay);
  const menuDaysOptions: string[] = Object.keys(formatedForecastPerDay);
  const [selectedDay, setSelectedDay] = useState<string>(
    getDayName(new Date(), "long"),
    // menuDaysOptions[0],
  );
  const selectedForecast = formatedForecastPerDay[selectedDay];

  return {
    selectedForecast,
    formatedForecastPerDay,
    selectedDay,
    setSelectedDay,
    menuDaysOptions,
  };
};
