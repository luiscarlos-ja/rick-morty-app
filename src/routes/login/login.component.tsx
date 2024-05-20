import { useId } from "react";
import { useAuth } from "../../hooks/useAuth";
import {
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginSection,
  LoginTitle,
} from "./login.styles";

function Login() {
  const usernameId = useId();
  const passwordId = useId();
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = event.currentTarget;

    if (username.value === "admin" && password.value === "admin") {
      login({ username: username.value });
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <LoginSection>
      <LoginContainer>
        <LoginTitle>Iniciar Sesión</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLabel htmlFor={usernameId}>Usuario</LoginLabel>
          <LoginInput
            type="text"
            id={usernameId}
            name="username"
            placeholder="admin"
          />
          <LoginLabel htmlFor={passwordId}>Contraseña</LoginLabel>
          <LoginInput
            type="password"
            id={passwordId}
            name="password"
            placeholder="admin"
          />
          <LoginButton type="submit" value={"Ingresar"} />
        </LoginForm>
      </LoginContainer>
    </LoginSection>
  );
}

export default Login;
