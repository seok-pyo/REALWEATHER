import { create } from "zustand";

interface Location {
  lat: number;
  lon: number;
  setCoords: (lat: number, lon: number) => void;
}

export const useLocationStore = create<Location>((set) => ({
  lat: 37.5665,
  lon: 126.978,
  setCoords: (lat, lon) => set({ lat, lon }),
}));
