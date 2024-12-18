import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Página de inicio
import HomePage from "../pages/HomePage/HomePage"; // Página de inicio
import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage";
import ArmadoPC from '../pages/ArmadoPCPage/ArmadoPCPage';
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UsersList from "../pages/AdminPages/users/UserList";
import ProductList from "../pages/AdminPages/products/ProductList";
import CategoriesList from "../pages/AdminPages/categories/CategoriesList";
import OrderList from "../pages/AdminPages/orders/OrderList";
import Checkout from "../pages/UserPages/Checkout";
import CartDetail from "../pages/UserPages/CartDetail";
import ProductDetail from "../pages/UserPages/ProductDetail";
import PayDetail from "../pages/UserPages/PayDetail";

export default function AppRouter() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/soporte" element={<Soporte />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/arma-tu-pc" element={<ArmadoPC />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />


      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/CartDetail" element={<CartDetail />} />
        <Route path="/PayDetail" element={<PayDetail />} />
      </Route>

      {/* RUTAS ADMINISTRADOR */}
      <Route element={<ProtectedRoutes adminOnly />}>
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={<OrderList />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
      </Route>
    </Routes>
  );
}
