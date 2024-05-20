import { Character } from "../../components/character/character.component";
import { Location } from "../../components/location/location.component";
import { useFavorites } from "../../hooks/useFavorites";
import {
  FavoritesContainer,
  FavoritesSection,
  FavoritesSubTitle,
  FavoritesTitle,
} from "./favorites.styles";

function Favorites() {
  const { favorites } = useFavorites();
  return (
    <FavoritesSection>
      <FavoritesTitle>Favoritos</FavoritesTitle>
      <FavoritesSubTitle>Personajes</FavoritesSubTitle>
      <FavoritesContainer>
        {favorites.characters.length ? (
          favorites.characters.map((character) => (
            <Character
              key={character.id}
              character={character}
              isFavorite={true}
            />
          ))
        ) : (
          <p>No hay personajes favoritos</p>
        )}
      </FavoritesContainer>
      <FavoritesSubTitle>Ubicaciones</FavoritesSubTitle>
      <FavoritesContainer>
        {favorites.locations.length ? (
          favorites.locations.map((location) => (
            <Location key={location.id} location={location} isFavorite={true} />
          ))
        ) : (
          <p>No hay ubicaciones favoritas</p>
        )}
      </FavoritesContainer>
    </FavoritesSection>
  );
}

export default Favorites;
