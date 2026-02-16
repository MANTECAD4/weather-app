import Box from "@mui/material/Box";

import { Navbar } from "./features/navbar";
import { Dashboard } from "./features/dashboard/Dashboard";
import { useHandleError } from "./providers/app-state/useHandleError";
import { ErrorScreen } from "./features/ErrorScreen";
import { SearchSection } from "./features/search-section/SearchSection";
import { ErrorSnackbar } from "./components/ErrorSnackbar";

export const App = () => {
  const { hasError, error } = useHandleError();
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
