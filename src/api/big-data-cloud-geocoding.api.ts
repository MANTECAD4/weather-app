import axios from "axios";

export const bigDataCloudGeocodingApi = axios.create({
  baseURL: "https://api.bigdatacloud.net/data",
});
