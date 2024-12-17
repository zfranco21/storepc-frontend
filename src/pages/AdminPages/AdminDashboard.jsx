import React from "react";
import "./AdminDashboard.css"; // Archivo CSS para los estilos

import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>

      <div className="dashboard-container">
        <h1 className="dashboard-title">Panel de Administración</h1>
        <div className="dashboard-buttons">
          <button
            className="dashboard-button"
            onClick={() => {
              navigate("/admin/users/");
            }}
          >
            Gestionar Usuarios
          </button>
          <button
            className="dashboard-button"
            onClick={() => {
              navigate("/admin/products/");
            }}
          >
            Gestionar Productos
          </button>
          <button
            className="dashboard-button"
            onClick={() => (window.location.href = "/admin/orders")}
          >
            Gestionar Órdenes
          </button>
          <button
            className="dashboard-button"
            onClick={() => {
              navigate("/admin/categories");
            }}
          >
            Gestionar Categorías
          </button>
        </div>
      </div>
    </>
  );
}
