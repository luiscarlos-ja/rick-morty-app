import { useReducer } from "react";
import { LocationsReducer } from "../types";
import { initialState, locationsReducer } from "../reducers/locations";
import { LOCATIONS_ACTION_TYPES } from "../consts";
import { Info, Location } from "../locations";

export const useLocationsReducer = (): LocationsReducer => {
  const [{ locations, isLoading, fetchUrl }, dispatch] = useReducer(
    locationsReducer,
    initialState
  );

  const getLocations = async () => {
    if (fetchUrl === null) return;

    dispatch({
      type: LOCATIONS_ACTION_TYPES.SET_IS_LOADING,
      payload: { isLoading: true },
    });

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const locations = data.results as Location[];
        const info = data.info as Info;
        dispatch({
          type: LOCATIONS_ACTION_TYPES.SET_LOCATIONS,
          payload: { locations: locations, fetchUrl: info.next },
        });
      })
      .finally(() => {
        dispatch({
          type: LOCATIONS_ACTION_TYPES.SET_IS_LOADING,
          payload: { isLoading: false },
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { locations, getLocations, isLoading };
};
