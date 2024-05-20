import styled from "styled-components";

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  height: 340px;
`;

export const CharacterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterImage = styled.img`
  max-width: 150px;
  height: auto;
  border-radius: 50%;
`;

export const CharacterName = styled.h2`
  margin: 0.5rem 0;
  text-align: center;
`;

export const CharacterSpecies = styled.span`
  padding: 0;
`;

export const CharacterEpisodes = styled.p`
  padding: 0;
  margin: 0.5rem 0;
  font-weight: bold;
`;

export const CharacterButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 2rem;
`;
