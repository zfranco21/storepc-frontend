import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/UserAuthContext";

export default function ProtectedRoutes({ adminOnly = false }) {
  const { user } = useAuth();

  // Si el usuario no está definido, carga desde localStorage como respaldo
  const savedUser = localStorage.getItem("user");
  const currentUser = user || (savedUser && JSON.parse(savedUser));

  if (!currentUser) {
    return <Navigate to="/" />; // redireccion por si no hay usuario logeado
  }

  if (adminOnly && !currentUser.isAdmin) {
    return <Navigate to="/" />; // redireccion por si el usuario logeado no es administrador
  }

  return <Outlet />; // Componente hijo que se renderiza cuando la ruta está protegida
}
