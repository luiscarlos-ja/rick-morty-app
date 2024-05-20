import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { FavoritesProvider } from "./context/favorites.context.tsx";
import { AuthProvider } from "./context/auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FavoritesProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FavoritesProvider>
  </BrowserRouter>
);
