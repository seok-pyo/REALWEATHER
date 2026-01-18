import { create } from "zustand";

interface Toggle {
  isToggle: boolean;
  setToggle: () => void;
}

export const useToggleStore = create<Toggle>((set) => ({
  isToggle: true,
  setToggle: () => set((state) => ({ isToggle: !state.isToggle })),
}));
