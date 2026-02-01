import axios from "axios";

export const geoCodingApi = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});
