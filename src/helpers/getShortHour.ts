export const getShortHour = (date: Date) => {
  const hour = String(
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      hour12: true,
    }).format(date),
  );
  return hour;
};
