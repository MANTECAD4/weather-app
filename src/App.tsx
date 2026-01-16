import { Box, Button, TextField, Typography } from "@mui/material";

export const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        transition: "background-color 0.3s ease",
        // color: "text.primary",
      }}
    >
      <Typography variant="h2">Weather App</Typography>
      <Typography variant="h1">Weather App</Typography>
      <Typography variant="h3">Weather App</Typography>
      <Typography variant="h4">Weather App</Typography>
      <Typography variant="h5">Weather App</Typography>
      <Typography variant="h6">Weather App</Typography>
      <Typography variant="subtitle1">Weather App</Typography>
      <Typography variant="subtitle2">Weather App</Typography>
      <Typography variant="body1">Weather App</Typography>
      <Typography variant="body2">Weather App</Typography>
      <Typography variant="button">Weather App</Typography>
      <Typography variant="caption">Weather App</Typography>
      <TextField label="City" variant="outlined" />
      <Button variant="contained">Get Weather</Button>
    </Box>
  );
};
