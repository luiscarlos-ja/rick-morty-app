import { Character } from "../characters";
import { CHARCATERS_ACTION_TYPES } from "../consts";

export const initialState = {
  characters: [],
  isLoading: false,
  fetchUrl: `https://rickandmortyapi.com/api/character`,
};

type Action =
  | {
      type: typeof CHARCATERS_ACTION_TYPES.SET_CHARACTERS;
      payload: { characters: Character[]; fetchUrl: string };
    }
  | {
      type: typeof CHARCATERS_ACTION_TYPES.SET_IS_LOADING;
      payload: { isLoading: boolean };
    };

interface State {
  characters: Character[];
  isLoading: boolean;
  fetchUrl: string;
}

export const charactersReducer = (state: State, action: Action): State => {
  if (CHARCATERS_ACTION_TYPES.SET_CHARACTERS === action.type) {
    const { characters, fetchUrl } = action.payload;
    return {
      ...state,
      fetchUrl,
      characters: [...state.characters, ...characters],
    };
  }

  if (CHARCATERS_ACTION_TYPES.SET_IS_LOADING === action.type) {
    const { isLoading } = action.payload;
    return {
      ...state,
      isLoading: isLoading,
    };
  }

  return state;
};
