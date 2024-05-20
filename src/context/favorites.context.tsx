import { createContext } from "react";
import { FavoritesContext as FavoritesContextType } from "../types";
import { useFavoritesReducer } from "../hooks/useFavoritesReducer";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    favorites,
    setLocations,
    setCharacters,
    deleteLocation,
    deleteCharacter,
    resetFavorites,
  } = useFavoritesReducer();

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setLocations,
        setCharacters,
        deleteLocation,
        deleteCharacter,
        resetFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
