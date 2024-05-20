import styled from "styled-components";

export const CharactersSection = styled.section`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-bottom: 70px;
  }
`;

export const CharactersContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.5rem;
`;

export const CharacterTile = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
