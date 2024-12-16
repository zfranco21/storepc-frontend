import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Página de inicio
import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UsersList from "../pages/AdminPages/users/UserList";
import ProductList from "../pages/AdminPages/products/ProductList";
import CategoriesList from "../pages/AdminPages/categories/CategoriesList";

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
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={"<Orders />"} />
        <Route path="/admin/categories" element={<CategoriesList />} />
      </Route>
    </Routes>
  );
}
