import Box from "@mui/material/Box";
import { Navbar } from "./Navbar";
import { SearchSection } from "./SearchSection/SearchSection";
import { Dashboard } from "./Dashboard/Dashboard";

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
