import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserAuthProvider } from "./context/UserAuthContext";
import "./index.css";
import App from "./App"; // Importas App.jsx que es el componente raíz

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </StrictMode>
);

{
  /* 
<StrictMode> modo estricto de react
  <BrowserRouter> capa encargada del enrutamiento de la aplicacion
    <UserAuthProvider> capa encargada del manejo de datos de usuario logeado
      <App /> capa de aplicacion
    </UserAuthProvider>
  </BrowserRouter>
</StrictMode> 
*/
}
