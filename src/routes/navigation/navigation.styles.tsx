import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ResponsiveNavigationContainer = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  background-color: white;

  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(BaseNavLink)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: darkslategrey;
  font-weight: bold;
  transition: color 0.3s;

  &.active {
    color: #36d7b7;
  }

  &:hover {
    color: #36d7b7;
  }
`;

export const NavButton = styled.span`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  color: darkslategrey;
  transition: color 0.3s;
  &:hover {
    color: #36d7b7;
  }
`;
