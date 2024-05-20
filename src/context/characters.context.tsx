import { createContext, useEffect } from "react";
import { CharactersReducer } from "../types";
import { useCharactersReducer } from "../hooks/useCharactersReducer";

export const CharatersContext = createContext<CharactersReducer | undefined>(
  undefined
);

export const CharactersProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { characters, getCharacters, isLoading } = useCharactersReducer();

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CharatersContext.Provider value={{ characters, getCharacters, isLoading }}>
      {children}
    </CharatersContext.Provider>
  );
};
