import { Route, Routes } from "react-router-dom";

import { CharactersProvider } from "./context/characters.context";
import Characters from "./routes/characters/characters.component";

import { LocationsProvider } from "./context/locations.context";
import Locations from "./routes/locations/locations.component";
import Navigation from "./routes/navigation/navigation.component";
import Favorites from "./routes/favorites/favorites.component";
import Login from "./routes/login/login.component";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <CharactersProvider>
              <Characters />
            </CharactersProvider>
          }
        />
        <Route
          path="/ubicaciones"
          element={
            <LocationsProvider>
              <Locations />
            </LocationsProvider>
          }
        />
        {currentUser && <Route path="/favoritos" element={<Favorites />} />}
        {!currentUser && <Route path="/login" element={<Login />} />}
        <Route path="*" element={<h1>Página No Encontrada</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
