import Box from "@mui/material/Box";
import { Navbar } from "./Navbar";
import { SearchSection } from "./SearchSection/SearchSection";

export const App = () => {
  return (
    <Box className="section-container">
      <Navbar />
      <main>
        <SearchSection />
      </main>
    </Box>
  );
};
