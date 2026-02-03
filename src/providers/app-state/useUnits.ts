import { create } from "zustand";

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

interface UnitsSlice {
  usesImperial: boolean;
  temperatureUnits: TemperatureUnits;
  windSpeedUnits: WindSpeedUnits;
  precipitationUnits: PrecipitationUnits;

  setTemperatureUnits: (units: TemperatureUnits) => void;
  setWindSpeedUnits: (units: WindSpeedUnits) => void;
  setPrecipitationUnits: (units: PrecipitationUnits) => void;
  changeMetrics: () => void;
}

export const useUnits = create<UnitsSlice>((set) => ({
  usesImperial: false,
  precipitationUnits: PrecipitationUnits.MILIMETERS,
  temperatureUnits: TemperatureUnits.CELSIUS,
  windSpeedUnits: WindSpeedUnits.KMH,

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
