import React, { useState } from "react";
import "./UserDashboard.css";

import UserDetails from "../UserPages/UserDetails";
import UserOrders from "../UserPages/UserOrders";

export default function UserDashboard() {

    const [view, setView] = useState("orders"); // Controla qué componente se muestra

    return (
        <div className="user-dashboard-container">
            {/* Barra de navegación */}
            <div className="user-dashboard-nav">
                <button
                    className={`user-dashboard-button ${view === "orders" ? "active" : ""}`}
                    onClick={() => setView("orders")}
                >
                    Mis Compras
                </button>
                <button
                    className={`user-dashboard-button ${view === "data" ? "active" : ""}`}
                    onClick={() => setView("data")}
                >
                    Mis Datos
                </button>

            </div>

            {/* Contenido dinámico */}
            <div className="user-dashboard-content">
                {view === "orders" && <UserOrders />}
                {view === "data" && <UserDetails />}
            </div>
        </div>
    );
}
