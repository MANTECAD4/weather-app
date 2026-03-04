import Box from "@mui/material/Box";

import { Navbar } from "./features/navbar";
import { Dashboard } from "./features/dashboard/Dashboard";
import { ErrorScreen } from "./features/ErrorScreen";
import { SearchSection } from "./features/search-section/SearchSection";
import { useInitiApp } from "./hooks/useInitiApp";
import { SearchPlaceholder } from "./features/SearchPlaceholder";

export const App = () => {
  const { hasError, hasContent } = useInitiApp();
  if (hasError) return <ErrorScreen />;
  return (
    <Box className="section-container">
      <Navbar />
      <main>
        <SearchSection />
        {hasContent ? <Dashboard /> : <SearchPlaceholder />}
      </main>
    </Box>
  );
};
