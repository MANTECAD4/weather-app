import { create } from "zustand";

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

interface LocationSlice {
  name: string;
  locationCoordinates: LocationCoordinates;
  locationDetails: string;
  setLocationDetails: (name: string) => void;
  setLocationCoordinates: (coordinates: LocationCoordinates) => void;
  setName: (name: string) => void;
}
export const useLocation = create<LocationSlice>((set) => ({
  name: "'",
  locationDetails: "",
  locationCoordinates: {
    latitude: 0,
    longitude: 0,
  },
  setLocationCoordinates: (coordinates: LocationCoordinates) =>
    set({ locationCoordinates: coordinates }),

  setLocationDetails: (fullName: string) => set({ locationDetails: fullName }),
  setName: (name: string) => set({ name: name }),
}));
