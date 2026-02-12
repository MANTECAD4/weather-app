import { geoCodingApi } from "../api/geocoding.api";
import { sleep } from "../helpers/sleep";
import {
  GeoCodingLocationResponse,
  Location,
} from "../interfaces/geo-coding.interface";

export const getLocations = async (location: string): Promise<Location[]> => {
  await sleep(1500);

  const params = new URLSearchParams({
    name: location,
    // count: "10",
    language: "en",
    format: "json",
    timezone: "auto",
  });

  const { data } = await geoCodingApi.get<GeoCodingLocationResponse>(
    `/search?`,
    {
      params,
    },
  );
  const { results: locations = [] } = data;
  return locations;
};
