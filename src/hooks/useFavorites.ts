import { useContext } from "react";
import { FavoritesContext as FavoritesContextType } from "../types";
import { FavoritesContext } from "../context/favorites.context";

export function useFavorites(): FavoritesContextType {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
