import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteItem {
  address: string;
  lat: number;
  lon: number;
  alias?: string;
}

interface FavoriteStore {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (address: string) => void;
  isFavorite: (address: string) => boolean;
  updateFavoriteAlias: (address: string, alias: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      removeFavorite: (address) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.address !== address),
        })),

      isFavorite: (address) =>
        get().favorites.some((item) => item.address === address),

      updateFavoriteAlias: (address: string, alias: string) =>
        set((state) => ({
          favorites: state.favorites.map((item) =>
            item.address === address ? { ...item, alias } : item
          ),
        })),
    }),
    {
      name: "savedLocations",
    }
  )
);
