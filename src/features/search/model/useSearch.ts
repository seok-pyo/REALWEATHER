import { useState } from "react";

export function useSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen((prev) => !prev);
  const closeSearch = () => setIsOpen(false);

  return { isOpen, toggleSearch, closeSearch };
}
