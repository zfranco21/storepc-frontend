import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserAuthProvider } from "./context/UserAuthContext";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App"; // Importas App.jsx que es el componente raíz
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserAuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserAuthProvider>
    </BrowserRouter>
  </StrictMode>
);

{
  /* 
<StrictMode> modo estricto de react
  <BrowserRouter> capa encargada del enrutamiento de la aplicacion
    <UserAuthProvider> capa encargada del manejo de datos de usuario logeado
      <CartProvider> capa encargada de manejar datos del carrito de compras atravez de la pagina. 
        <App /> capa de aplicacion que si o si tiene que llamar al approuter para las redirecciones
      </CartProvider>
    </UserAuthProvider>
  </BrowserRouter>
</StrictMode> 
*/
}
