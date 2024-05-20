import { useState } from "react";
import { Location } from "../locations";
import { Favorites } from "../types";
import { loadFavorites, saveFavorites } from "../utils/persistFavorites";
import { Character } from "../characters";

export const useFavoritesReducer = () => {
  const [favorites, setFavorites] = useState<Favorites>(loadFavorites());

  const onSetLocations = (newLocations: Location) => {
    if (
      favorites.locations.some((location) => location.id === newLocations.id)
    ) {
      return;
    }

    setFavorites((prev: Favorites) => {
      const newFavorites: Favorites = {
        ...prev,
        locations: [...prev.locations, newLocations],
      };
      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const onSetCharacters = (newCharacter: Character) => {
    if (
      favorites.characters.some((character) => character.id === newCharacter.id)
    ) {
      return;
    }

    setFavorites((prev: Favorites) => {
      const newFavorites: Favorites = {
        ...prev,
        characters: [...prev.characters, newCharacter],
      };
      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const onDeleteLocation = (locationId: number) => {
    setFavorites((prev: Favorites) => {
      const newFavorites: Favorites = {
        ...prev,
        locations: prev.locations.filter(
          (location) => location.id !== locationId
        ),
      };
      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const onDeleteCharacter = (characterId: number) => {
    setFavorites((prev: Favorites) => {
      const newFavorites: Favorites = {
        ...prev,
        characters: prev.characters.filter(
          (character) => character.id !== characterId
        ),
      };
      saveFavorites(newFavorites);
      return newFavorites;
    });
  };

  const resetFavorites = () => {
    setFavorites({ characters: [], locations: [] });
  };

  return {
    favorites,
    setLocations: onSetLocations,
    setCharacters: onSetCharacters,
    deleteLocation: onDeleteLocation,
    deleteCharacter: onDeleteCharacter,
    resetFavorites,
  };
};
