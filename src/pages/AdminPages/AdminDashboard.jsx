import React from "react";
import "./AdminDashboard.css"; // Archivo CSS para los estilos
<<<<<<< HEAD
import Header from "../../components/Header"; // importe provisorio
=======

>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <>
<<<<<<< HEAD
      <Header /> {/* import provisorio */}
=======

>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
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
