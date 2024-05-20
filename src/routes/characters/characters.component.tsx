import {
  Character,
  CharacterObserver,
} from "../../components/character/character.component";
import { useCharacters } from "../../hooks/useCharacters";
import {
  CharacterTile,
  CharactersContainer,
  CharactersSection,
} from "./characters.styles";

function Characters() {
  const { characters } = useCharacters();
  const charactersLength = characters.length - 1;

  return (
    <CharactersSection>
      <CharacterTile>Personajes</CharacterTile>
      <CharactersContainer>
        {characters.map((character, idx) => {
          if (idx === charactersLength)
            return (
              <CharacterObserver key={character.id} character={character} />
            );
          return <Character key={character.id} character={character} />;
        })}
      </CharactersContainer>
    </CharactersSection>
  );
}

export default Characters;
