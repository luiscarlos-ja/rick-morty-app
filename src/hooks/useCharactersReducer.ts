import { useReducer } from "react";
import { charactersReducer, initialState } from "../reducers/characters";
import { CHARCATERS_ACTION_TYPES } from "../consts";
import { CharactersReducer } from "../types";
import { Character, Info } from "../characters";

export const useCharactersReducer = (): CharactersReducer => {
  const [{ characters, isLoading, fetchUrl }, dispatch] = useReducer(
    charactersReducer,
    initialState
  );

  const getCharacters = async () => {
    if (fetchUrl === null) return;

    dispatch({
      type: CHARCATERS_ACTION_TYPES.SET_IS_LOADING,
      payload: { isLoading: true },
    });

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const characters = data.results as Character[];
        const info = data.info as Info;
        dispatch({
          type: CHARCATERS_ACTION_TYPES.SET_CHARACTERS,
          payload: { characters: characters, fetchUrl: info.next },
        });
      })
      .finally(() => {
        dispatch({
          type: CHARCATERS_ACTION_TYPES.SET_IS_LOADING,
          payload: { isLoading: false },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { characters, getCharacters, isLoading };
};
