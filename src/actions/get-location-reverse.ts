import { bigDataCloudGeocodingApi } from "../api/big-data-cloud-geocoding.api";
import { GeoCodingReverseBigDataCloudResponse } from "../interfaces/big-data-cloid-api.interface";

/**
 * Returns a location's name according to given coordinates
 */
export const getLocationReverse = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<GeoCodingReverseBigDataCloudResponse> => {
  const url = `/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
  const { data } =
    await bigDataCloudGeocodingApi.get<GeoCodingReverseBigDataCloudResponse>(
      url,
    );
  return data;
};
