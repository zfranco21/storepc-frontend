import React, { useState } from "react";
import Select from "react-select";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./UserList.css";
import Header from "../../../components/Header";

function UserList() {
  const navigate = useNavigate(); // Inicializa el hook useNavigate
  const { users, loading, error } = useFetchUsers(); // Destructuramos lo que devuelve el hook
  const [selectedUser, setSelectedUser] = useState(null); // Estado para el usuario seleccionado
  const [isEditing, setIsEditing] = useState(false); // Estado para el modo de edición
  const [updatedUser, setUpdatedUser] = useState({}); // Estado para almacenar los datos editados

  // Generar opciones para react-select basadas en los usuarios
  const userOptions = users.map((user) => ({
    value: user.email, // Valor único por usuario
    label: `${user.name} (${user.email})`, // Mostrar nombre y correo como etiqueta
    user, // Adjuntar el objeto usuario completo para facilitar el acceso
  }));

  const handleChange = (selectedOption) => {
    setSelectedUser(selectedOption.user);
    setUpdatedUser(selectedOption.user);
  };

  const handleToggleState = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${selectedUser._id}/enable`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isEnabled: !selectedUser.isEnabled }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el estado del usuario");
      }
      const data = await response.json();
      setSelectedUser((prev) => ({ ...prev, isEnabled: data.isEnabled }));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${selectedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }
      const data = await response.json();
      setSelectedUser(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (selectedOption) => {
    setUpdatedUser((prev) => ({ ...prev, isAdmin: selectedOption.value }));
  };

  if (loading)
    return <p className="user-list__loading">Cargando usuarios...</p>;
  if (error) return <p className="user-list__error">Error: {error}</p>;

  return (
    <>
      <Header /> {/* import provisorio */}
      <div className="user-list__container">
        {/* Botón para volver al AdminDashboard */}
        <button
          className="user-list__back-button"
          onClick={() => navigate("/AdminDashboard")} // Redirige al AdminDashboard
        >
          Volver al Dashboard
        </button>

        <h1 className="user-list__title">Lista de Usuarios</h1>
        <Select
          className="user-list__select"
          options={userOptions} // Opciones generadas
          onChange={handleChange} // Manejar el cambio de selección
          placeholder="Selecciona un usuario por email"
          isSearchable
        />
        {selectedUser && (
          <div className="user-list__details">
            <h2 className="user-list__details-title">Usuario seleccionado:</h2>
            {!isEditing ? (
              <>
                <p className="user-list__details-item">
                  Nombre: {selectedUser.name}
                </p>
                <p className="user-list__details-item">
                  Email: {selectedUser.email}
                </p>
                <p className="user-list__details-item">
                  Rol: {selectedUser.isAdmin ? "Admin" : "Usuario"}
                </p>
                <p className="user-list__details-item">
                  Estado:{" "}
                  {selectedUser.isEnabled ? "Habilitado" : "Deshabilitado"}
                </p>
                <button
                  className="user-list__button user-list__button--toggle"
                  onClick={handleToggleState}
                >
                  {selectedUser.isEnabled ? "Deshabilitar" : "Habilitar"}
                </button>
                <button
                  className="user-list__button user-list__button--edit"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Usuario
                </button>
              </>
            ) : (
              <div className="user-list__edit-form">
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChange}
                  placeholder="Nombre"
                  className="user-list__input"
                />
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="user-list__input"
                />
                <Select
                  className="user-list__select-role"
                  options={[
                    { value: true, label: "Admin" },
                    { value: false, label: "Usuario" },
                  ]}
                  onChange={handleRoleChange}
                  defaultValue={{
                    value: updatedUser.isAdmin,
                    label: updatedUser.isAdmin ? "Admin" : "Usuario",
                  }}
                  placeholder="Selecciona un rol"
                />
                <input
                  type="password"
                  name="password"
                  value={updatedUser.password || ""}
                  onChange={handleInputChange}
                  placeholder="Nueva contraseña"
                  className="user-list__input"
                />
                <button
                  className="user-list__button user-list__button--save"
                  onClick={handleUpdateUser}
                >
                  Guardar Cambios
                </button>
                <button
                  className="user-list__button user-list__button--cancel"
                  onClick={() => setIsEditing(false)}
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default UserList;
