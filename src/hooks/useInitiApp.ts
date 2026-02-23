import { useEffect, useMemo } from "react";
import { getLocationReverse } from "../actions/get-location-reverse";
import { useHandleError } from "../providers/app-state/useHandleError";
import { askLocation } from "../actions/ask-location";
import { useLocation } from "../providers/app-state/useLocation";

export const useInitiApp = () => {
  const { hasError, error } = useHandleError();
  const { setLocationCoordinates, setName, setLocationDetails } = useLocation();
  const { locationCoordinates } = useLocation();

  const hasContent = useMemo(
    () =>
      locationCoordinates.latitude !== 0 && locationCoordinates.longitude !== 0,
    [locationCoordinates],
  );

  const onAskLocationSucess: PositionCallback = async (position) => {
    const {
      coords: { latitude, longitude },
    } = position;
    setLocationCoordinates({ latitude, longitude });

    const geocodingReverseResponse = await getLocationReverse({
      latitude,
      longitude,
    });

    const currentLocationDetails = [
      geocodingReverseResponse.principalSubdivision,
      geocodingReverseResponse.countryName,
    ].join(", ");

    setName(geocodingReverseResponse.city);
    setLocationDetails(currentLocationDetails);
  };

  const onAskLocationError: PositionErrorCallback = () => {
    console.log("Access to location denied");
  };

  useEffect(() => {
    askLocation(onAskLocationSucess, onAskLocationError);
  }, [askLocation]);
  return { hasError, hasContent, error };
};
