import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserAuthProvider } from "./context/UserAuthContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App"; // Importas App.jsx que es el componente raíz

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> 
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
    </BrowserRouter>
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
