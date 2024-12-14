import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Página de inicio
/* import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage"; */
import ProtectedRoutes from "./ProtectedRoutes"; // Correcto con exportación por defecto
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UsersList from "../pages/AdminPages/users/UserList";

// descomentar los import de paginas que no existen todabia y sacarle las comillas a los componentes cuando los llama route
// ya que se encuentra correctamente funcionando el router y cuando detecta que hay una pagina inexisente
// rompe el sitio web por completo ya que no se añade logica try/catch.

export default function AppRouter() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/" element={<App />} />
      <Route path="/soporte" element={"<Soporte />"} />
      <Route path="/productos" element={"<Productos />"} />

      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/soporte" element={"<Soporte />"} />
        <Route path="/productos" element={"<Productos />"} />
      </Route>

      {/* RUTAS ADMINISTRADOR */}
      <Route element={<ProtectedRoutes adminOnly />}>
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/products" element={"<Products />"} />
        <Route path="/admin/orders" element={"<Orders />"} />
        <Route path="/admin/categories" element={"<Categories />"} />
      </Route>
    </Routes>
  );
}
