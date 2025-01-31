import React, { useState } from "react";
import { useAuth } from "../../context/UserAuthContext"; // Ajusta la ruta si es necesario
import "./UserDetails.css"; // Archivo CSS

export default function UserDetails() {
    const { user, setUser } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setError("Las contraseñas nuevas no coinciden.");
            return;
        }

        if (formData.oldPassword !== user.password) {
            setError("El password viejo es incorrecto.");
            return;
        }

        setUser({ ...user, ...formData });
        alert("Datos actualizados correctamente.");
        setError(""); // Limpiar errores después de una actualización exitosa
    };

    return (
        <div className="user-details-container">
            <h2>Mis Datos</h2>
            <p>Aquí puedes actualizar tus datos personales.</p>
            <form onSubmit={handleSubmit} className="user-details-form">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Correo Electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                {/* Campos para la contraseña */}
                <label htmlFor="oldPassword">Contraseña Actual:</label>
                <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="newPassword">Nueva Contraseña:</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirmPassword">Confirmar Nueva Contraseña:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="update-button">
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
}
