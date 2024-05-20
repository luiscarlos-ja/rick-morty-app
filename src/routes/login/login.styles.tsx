import styled from "styled-components";

export const LoginSection = styled.section`
  display: grid;
  place-items: center;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    height: 100vh;
    margin: 0;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: grid;
  gap: 1rem;
  width: 300px;
`;

export const LoginLabel = styled.label`
  font-size: 1.2rem;
`;

export const LoginInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const LoginButton = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #36d7b7;
  color: white;
  border: none;
  cursor: pointer;
`;
