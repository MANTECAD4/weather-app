import { getLocations } from "../actions";

export const locationQuery = (location: string) => ({
  queryFn: () => getLocations(location),
  queryKey: ["geo-coding", "locations", location],
  enabled: location !== "",
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 15,
  placeholderData: (previousData: any, _previousQuery: any) => previousData,
});
