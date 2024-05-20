import { useContext } from "react";
import { LocationsReducer } from "../types";
import { LocationsContext } from "../context/locations.context";

export function useLocations(): LocationsReducer {
  const context = useContext(LocationsContext);
  if (context === undefined) {
    throw new Error("useLocations must be used within a LocationsProvider");
  }
  return context;
}
