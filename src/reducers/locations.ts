import { LOCATIONS_ACTION_TYPES } from "../consts";
import { Location } from "../locations";

export const initialState = {
  locations: [],
  isLoading: false,
  fetchUrl: `https://rickandmortyapi.com/api/location`,
};

type Action =
  | {
      type: typeof LOCATIONS_ACTION_TYPES.SET_LOCATIONS;
      payload: { locations: Location[]; fetchUrl: string };
    }
  | {
      type: typeof LOCATIONS_ACTION_TYPES.SET_IS_LOADING;
      payload: { isLoading: boolean };
    };

interface State {
  locations: Location[];
  isLoading: boolean;
  fetchUrl: string;
}

export const locationsReducer = (state: State, action: Action): State => {
  if (LOCATIONS_ACTION_TYPES.SET_LOCATIONS === action.type) {
    const { locations, fetchUrl } = action.payload;
    return {
      ...state,
      fetchUrl,
      locations: [...state.locations, ...locations],
    };
  }

  if (LOCATIONS_ACTION_TYPES.SET_IS_LOADING === action.type) {
    const { isLoading } = action.payload;
    return {
      ...state,
      isLoading: isLoading,
    };
  }

  return state;
};
