import { createContext, useState } from "react";
import { AuthContextType, User } from "../types";
import { useCookies } from "react-cookie";
import { clearFavorites } from "../utils/persistFavorites";
import { useFavorites } from "../hooks/useFavorites";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { resetFavorites } = useFavorites();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [currentUser, setCurrentUser] = useState<User | null>(
    cookies.user || null
  );

  const login = (userData: User) => {
    setCookie("user", userData, { path: "/" });
    setCurrentUser(userData);
    navigate("/");
  };

  const logout = () => {
    removeCookie("user", { path: "/" });
    clearFavorites();
    resetFavorites();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
