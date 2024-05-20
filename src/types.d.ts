import { Character } from "./characters";
import { Location } from "./locations";

export interface CharactersReducer {
  characters: Character[];
  isLoading: boolean;
  getCharacters: () => void;
}

export interface LocationsReducer {
  locations: Location[];
  isLoading: boolean;
  getLocations: () => void;
}

export interface Favorites {
  characters: Character[];
  locations: Location[];
}

export interface FavoritesContext {
  favorites: Favorites;
  setLocations: (newLocations: Location) => void;
  setCharacters: (newCharacter: Character) => void;
  deleteLocation: (locationId: number) => void;
  deleteCharacter: (characterId: number) => void;
  resetFavorites: () => void;
}

export interface User {
  username: string;
}

export interface AuthContextType {
  currentUser: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
