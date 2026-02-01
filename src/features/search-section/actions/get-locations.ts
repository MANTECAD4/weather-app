import { geoCodingApi } from "../../../api/geocoding.api";
import {
  GeoCodingLocationResponse,
  Location,
} from "../../../shared/interfaces/geo-coding.interface";

export const getLocations = async (location: string): Promise<Location[]> => {
  const { data } = await geoCodingApi.get<GeoCodingLocationResponse>(
    `/search?name=${location}&count=10&language=en&format=json`,
  );
  const { results: locations = [] } = data;
  return locations;
};
