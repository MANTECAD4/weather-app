import { useLocation } from "../providers/app-state/useLocation";

export const askLocation = (
  success: PositionCallback,
  error: PositionErrorCallback,
) => {
  if (!navigator.geolocation) {
    console.log("Your browser does not have access to location");
    return;
  }
  navigator.geolocation.getCurrentPosition(success, error);
};
