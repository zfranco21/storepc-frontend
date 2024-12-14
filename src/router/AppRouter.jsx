import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";  // Página de inicio
import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage";
import ProtectedRoutes from "./ProtectedRoutes";  // Correcto con exportación por defecto

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
        <Route path="/admin" element={<div>Admin Dashboard</div>} />
      </Route>
    </Routes>
  );
}
