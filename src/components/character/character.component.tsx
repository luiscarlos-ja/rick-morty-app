import { useEffect, useRef } from "react";
import { Character as CharacterType } from "../../characters";
import { useCharacters } from "../../hooks/useCharacters";
import Loading from "../loading/loading.component";
import { useFavorites } from "../../hooks/useFavorites";
import {
  CharacterButton,
  CharacterCard,
  CharacterEpisodes,
  CharacterHeader,
  CharacterImage,
  CharacterName,
  CharacterSpecies,
} from "./character.styles";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";

type Props = {
  character: CharacterType;
  node?: React.RefObject<HTMLDivElement>;
  isFavorite?: boolean;
};

export function Character({ character, node, isFavorite }: Props) {
  const { setCharacters, deleteCharacter, favorites } = useFavorites();
  const { currentUser } = useAuth();

  const handleAddCharacter = (character: CharacterType) => () => {
    setCharacters(character);
  };

  const handleDeleteCharacter = (character: CharacterType) => () => {
    deleteCharacter(character.id);
  };

  return (
    <CharacterCard key={character.id} ref={node}>
      <CharacterHeader>
        <CharacterImage src={character.image} alt={character.name} />
        <CharacterName>{character.name}</CharacterName>
        <CharacterSpecies>{character.species}</CharacterSpecies>
        <CharacterEpisodes>
          {character.episode.length}{" "}
          {character.episode.length > 1 ? "episodios" : "episodio"}
        </CharacterEpisodes>
      </CharacterHeader>

      {currentUser &&
        (isFavorite ? (
          <CharacterButton onClick={handleDeleteCharacter(character)}>
            <LuX />
          </CharacterButton>
        ) : favorites.characters.some(
            (favCha) => favCha.id === character.id
          ) ? (
          <CharacterButton onClick={handleDeleteCharacter(character)}>
            <FaHeart color="36d7b7" />
          </CharacterButton>
        ) : (
          <CharacterButton
            type="button"
            onClick={handleAddCharacter(character)}
          >
            <FaRegHeart />
          </CharacterButton>
        ))}
    </CharacterCard>
  );
}

export function CharacterObserver({ character }: Props) {
  const node = useRef<HTMLDivElement>(null);
  const { getCharacters, isLoading } = useCharacters();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;
        getCharacters();
        observer.disconnect();
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Character character={character} node={node} />
      {isLoading && <Loading />}
    </>
  );
}
