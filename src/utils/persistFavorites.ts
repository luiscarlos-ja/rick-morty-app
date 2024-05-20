import { Favorites } from "../types";

export const saveFavorites = (favorites: Favorites) => {
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const loadFavorites = (): Favorites => {
  return window.localStorage.getItem("favorites")
    ? JSON.parse(window.localStorage.getItem("favorites")!)
    : { characters: [], locations: [] };
};

export const clearFavorites = () => {
  window.localStorage.removeItem("favorites");
};
