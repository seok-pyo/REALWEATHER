import { create } from "zustand";

interface Toggle {
  isToggle: boolean;
  setToggle: () => void;
  setCloseToggle: (value: boolean) => void;
}

export const useToggleStore = create<Toggle>((set) => ({
  isToggle: true,
  setToggle: () => set((state) => ({ isToggle: !state.isToggle })),

  setCloseToggle: (value: boolean) => set({ isToggle: value }),
}));
