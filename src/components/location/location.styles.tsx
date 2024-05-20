import styled from "styled-components";

export const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  height: 300px;
`;

export const LocationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const LocationTitle = styled.h2`
  margin: 0.3rem 0;
  text-align: center;
`;

export const LocaionTitles = styled.h4`
  text-align: center;
`;

export const LocationText = styled.span`
  text-align: center;
`;

export const LocationResidents = styled.p`
  padding: 0;
  font-size: large;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 2rem;
`;
