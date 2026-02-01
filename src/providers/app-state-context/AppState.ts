import { create } from "zustand";

// export enum MeasurmentUnits {
//   METRIC = "metric",
//   IMPERIAL = "imperial",
// }
export enum TemperatureUnits {
  CELSIUS = "celsius",
  FAHRENHEIT = "fahrenheit",
}
export enum WindSpeedUnits {
  KMH = "kilometers",
  MPH = "miles",
}
export enum PrecipitationUnits {
  MILIMETERS = "milimeters",
  INCHES = "inches",
}

interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

interface AppState {
  locationCoordinates: LocationCoordinates;
  usesImperial: boolean;
  temperatureUnits: TemperatureUnits;
  windSpeedUnits: WindSpeedUnits;
  precipitationUnits: PrecipitationUnits;

  setLocationCoordinates: (coordinates: LocationCoordinates) => void;
  setTemperatureUnits: (units: TemperatureUnits) => void;
  setWindSpeedUnits: (units: WindSpeedUnits) => void;
  setPrecipitationUnits: (units: PrecipitationUnits) => void;
  changeMetrics: () => void;
}

export const useUnits = create<AppState>((set) => ({
  locationCoordinates: {
    latitude: 52.52,
    longitude: 13.41,
  },
  usesImperial: false,
  precipitationUnits: PrecipitationUnits.MILIMETERS,
  temperatureUnits: TemperatureUnits.CELSIUS,
  windSpeedUnits: WindSpeedUnits.KMH,

  setLocationCoordinates: (coordinates: LocationCoordinates) =>
    set({ locationCoordinates: coordinates }),
  changeMetrics: () =>
    set((state) => {
      const usesImperial = !state.usesImperial;

      return {
        usesImperial,
        precipitationUnits: usesImperial
          ? PrecipitationUnits.INCHES
          : PrecipitationUnits.MILIMETERS,
        temperatureUnits: usesImperial
          ? TemperatureUnits.FAHRENHEIT
          : TemperatureUnits.CELSIUS,
        windSpeedUnits: usesImperial ? WindSpeedUnits.MPH : WindSpeedUnits.KMH,
      };
    }),
  setTemperatureUnits: (units: TemperatureUnits) =>
    set({ temperatureUnits: units }),
  setWindSpeedUnits: (units: WindSpeedUnits) => set({ windSpeedUnits: units }),
  setPrecipitationUnits: (units: PrecipitationUnits) =>
    set({ precipitationUnits: units }),
}));
