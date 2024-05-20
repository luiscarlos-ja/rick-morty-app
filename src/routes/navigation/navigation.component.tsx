import { Outlet } from "react-router-dom";
import { FaRegUserCircle, FaLocationArrow, FaHeart } from "react-icons/fa";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  NavButton,
  ResponsiveNavigationContainer,
} from "./navigation.styles";
import { useAuth } from "../../hooks/useAuth";

const Navigation = () => {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <NavigationContainer>
        <NavLinks>
          <NavLink to="/">PERSONAJES</NavLink>
          <NavLink to="/ubicaciones">UBICACIONES</NavLink>
          {currentUser && <NavLink to="/favoritos">FAVORITOS</NavLink>}
        </NavLinks>
        {currentUser ? (
          <NavButton as="span" onClick={() => logout()}>
            CERRAR SESIÓN
          </NavButton>
        ) : (
          <NavLink to="/login">INICIAR SESIÓN</NavLink>
        )}
      </NavigationContainer>
      <ResponsiveNavigationContainer>
        <NavLinks>
          <NavLink to="/">
            <FaRegUserCircle />
          </NavLink>
          <NavLink to="/ubicaciones">
            <FaLocationArrow />
          </NavLink>
          {currentUser && (
            <NavLink to="/favoritos">
              <FaHeart />
            </NavLink>
          )}
        </NavLinks>
        {currentUser ? (
          <NavButton as="span" onClick={() => logout()}>
            CERRAR SESIÓN
          </NavButton>
        ) : (
          <NavLink to="/login">INICIAR SESIÓN</NavLink>
        )}
      </ResponsiveNavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
