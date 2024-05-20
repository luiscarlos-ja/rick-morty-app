import { useContext } from "react";
import { type CharactersReducer } from "../types";
import { CharatersContext } from "../context/characters.context";

export function useCharacters(): CharactersReducer {
  const context = useContext(CharatersContext);
  if (context === undefined) {
    throw new Error("useCharacters must be used within a CharctersProvider");
  }
  return context;
}
