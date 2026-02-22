import Box from "@mui/material/Box";

import { Navbar } from "./features/navbar";
import { Dashboard } from "./features/dashboard/Dashboard";
import { useHandleError } from "./providers/app-state/useHandleError";
import { ErrorScreen } from "./features/ErrorScreen";
import { SearchSection } from "./features/search-section/SearchSection";
import { ErrorSnackbar } from "./components/ErrorSnackbar";
import { useEffect } from "react";
import { askLocation } from "./actions/ask-location";
import { useLocation } from "./providers/app-state/useLocation";
import { getLocationReverse } from "./actions/get-location-reverse";

export const App = () => {
  const { hasError, error } = useHandleError();
  const { setLocationCoordinates, setName, setLocationDetails } = useLocation();

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

  return (
    <Box className="section-container">
      <Navbar />
      <main>
        {hasError ? (
          <ErrorScreen />
        ) : (
          <>
            <SearchSection />
            <Dashboard />
          </>
        )}
        {/* <ErrorSnackbar /> */}
      </main>
    </Box>
  );
};
