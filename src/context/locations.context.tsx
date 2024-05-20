import { createContext, useEffect } from "react";
import { LocationsReducer } from "../types";
import { useLocationsReducer } from "../hooks/useLocationsReducer";

export const LocationsContext = createContext<LocationsReducer | undefined>(
  undefined
);

export const LocationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { locations, getLocations, isLoading } = useLocationsReducer();

  useEffect(() => {
    getLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocationsContext.Provider value={{ locations, getLocations, isLoading }}>
      {children}
    </LocationsContext.Provider>
  );
};
