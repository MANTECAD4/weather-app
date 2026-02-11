import { create } from "zustand";
import {
  PrecipitationUnits,
  TemperatureUnits,
  WindSpeedUnits,
} from "../../interfaces/units";

interface UnitsSlice {
  usesImperial: boolean;
  temperatureUnit: TemperatureUnits;
  windSpeedUnit: WindSpeedUnits;
  precipitationUnit: PrecipitationUnits;

  setTemperatureUnits: (units: TemperatureUnits) => void;
  setWindSpeedUnits: (units: WindSpeedUnits) => void;
  setPrecipitationUnits: (units: PrecipitationUnits) => void;
  changeMetrics: () => void;
}

export const useUnits = create<UnitsSlice>((set) => ({
  usesImperial: false,
  precipitationUnit: PrecipitationUnits.MILIMETERS,
  temperatureUnit: TemperatureUnits.CELSIUS,
  windSpeedUnit: WindSpeedUnits.KMH,

  changeMetrics: () =>
    set((state) => {
      const usesImperial = !state.usesImperial;

      return {
        usesImperial,
        precipitationUnit: usesImperial
          ? PrecipitationUnits.INCHES
          : PrecipitationUnits.MILIMETERS,
        temperatureUnit: usesImperial
          ? TemperatureUnits.FAHRENHEIT
          : TemperatureUnits.CELSIUS,
        windSpeedUnit: usesImperial ? WindSpeedUnits.MPH : WindSpeedUnits.KMH,
      };
    }),
  setTemperatureUnits: (units: TemperatureUnits) =>
    set({ temperatureUnit: units }),
  setWindSpeedUnits: (units: WindSpeedUnits) => set({ windSpeedUnit: units }),
  setPrecipitationUnits: (units: PrecipitationUnits) =>
    set({ precipitationUnit: units }),
}));
