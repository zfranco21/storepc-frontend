import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App"; // Página de inicio
import HomePage from "../pages/HomePage/HomePage"; // Página de inicio
import Soporte from "../pages/SoportePage/SoportePage";
import Productos from "../pages/ProductosPage/ProductosPage";
<<<<<<< HEAD
=======
import ArmadoPC from '../pages/ArmadoPCPage/ArmadoPCPage';
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../pages/AdminPages/AdminDashboard";
import UsersList from "../pages/AdminPages/users/UserList";
import ProductList from "../pages/AdminPages/products/ProductList";
import CategoriesList from "../pages/AdminPages/categories/CategoriesList";
<<<<<<< HEAD
=======
import OrderList from "../pages/AdminPages/orders/OrderList";
import Checkout from "../pages/UserPages/Checkout";
import CartDetail from "../pages/UserPages/CartDetail";
import ProductDetail from "../pages/UserPages/ProductDetail";
import PayDetail from "../pages/UserPages/PayDetail";
import UserDashboard from "../pages/UserPages/UserDashboard";
import UserDetails from "../pages/UserPages/UserDetails";
import UserOrders from "../pages/UserPages/UserOrders";
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82

export default function AppRouter() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
<<<<<<< HEAD
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} /> {/* Ruta predeterminada */}
        <Route path="soporte" element={<Soporte />} />
        <Route path="productos" element={<Productos />} />
      </Route>
=======
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/soporte" element={<Soporte />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/arma-tu-pc" element={<ArmadoPC />} />
      <Route path="/ProductDetail" element={<ProductDetail />} />

>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82

      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/soporte" element={<Soporte />} />
        <Route path="/productos" element={<Productos />} />
<<<<<<< HEAD
=======
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/CartDetail" element={<CartDetail />} />
        <Route path="/PayDetail" element={<PayDetail />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/UserOrders" element={<UserOrders />} />
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
      </Route>

      {/* RUTAS ADMINISTRADOR */}
      <Route element={<ProtectedRoutes adminOnly />}>
<<<<<<< HEAD
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={<div>Orders Page</div>} />
=======
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/orders" element={<OrderList />} />
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
        <Route path="/admin/categories" element={<CategoriesList />} />
      </Route>

      {/* RUTA GENÉRICA PARA PÁGINA NO ENCONTRADA */}
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
}
