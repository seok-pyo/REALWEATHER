import places from "./korea_districts.json";
import { useCallback, useState } from "react";

export function useSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen((prev) => !prev);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggleSearch, closeSearch };
}

export const filterPlace = (keyword: string) => {
  if (!keyword.trim()) return [];

  return places
    .filter((place) => {
      return place.includes(keyword);
    })
    .slice(0, 10);
};
