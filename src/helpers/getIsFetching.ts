import { useIsFetching } from "@tanstack/react-query";

export const getIsFetching = (): Boolean => {
  const numActiveQueries = useIsFetching();

  return numActiveQueries === 0 ? true : false;
};
