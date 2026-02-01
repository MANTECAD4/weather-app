import { geoCodingApi } from "../../../api/geocoding.api";
import { sleep } from "../../../shared/helpers/sleep";
import {
  GeoCodingLocationResponse,
  Location,
} from "../../../shared/interfaces/geo-coding.interface";

export const getLocations = async (location: string): Promise<Location[]> => {
  await sleep(1500);
  const { data } = await geoCodingApi.get<GeoCodingLocationResponse>(
    `/search?name=${location}&language=en&format=json`,
  );
  const { results: locations = [] } = data;
  return locations;
};
