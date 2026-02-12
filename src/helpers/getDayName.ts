export const getDayName = (date: Date, format: "long" | "short") => {
  const day = String(
    new Intl.DateTimeFormat("en-US", {
      weekday: format,
    }).format(date),
  );
  return day;
};
