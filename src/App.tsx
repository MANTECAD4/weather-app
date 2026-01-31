import Box from "@mui/material/Box";

import { SearchSection } from "./features/search-section/SearchSection";
import { Navbar } from "./features/navbar";
import { Dashboard } from "./features/dashboard/Dashboard";

export const App = () => {
  return (
    <Box className="section-container">
      <Navbar />
      <main>
        <SearchSection />
        <Dashboard />
      </main>
    </Box>
  );
};
