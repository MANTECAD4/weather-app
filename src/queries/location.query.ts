import { getLocations } from "../features/search-section/actions/get-locations";

export const locationQuery = (location: string) => ({
  queryFn: () => getLocations(location),
  queryKey: ["locations", location],
  enabled: location !== "",
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 15,
});
