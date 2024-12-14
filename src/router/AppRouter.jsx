import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Página de inicio
import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage";
import ProtectedRoutes from "./ProtectedRoutes"; // Correcto con exportación por defecto
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UsersList from "../pages/AdminPages/users/UserList";

export default function AppRouter() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/" element={<App />} />
      <Route path="/soporte" element={<Soporte />} />
      <Route path="/productos" element={<Productos />} />

      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/productos" element={<Productos />} />
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
