import "./Header.css";
import { useState, useEffect, useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";
import logo from "../assets/logo.svg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function Header() {
  // Estado para el valor del buscador
  const [searchTerm, setSearchTerm] = useState("");
  const [modalType, setModalType] = useState(null); // simplifica el control del renderizado de modales
  const { user, logout } = useContext(UserAuthContext);

  // Función para manejar el cambio en el buscador
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    if (searchTerm.trim() === "") {
      alert("Por favor ingresa un término de búsqueda.");
    } else {
      alert(`Buscando: ${searchTerm}`);
      // Aquí puedes integrar la lógica para realizar la búsqueda, como una llamada a una API
    }
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo de la página" />
        <h1>STORE PC</h1>
      </div>

      {/* Buscador */}
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
          <input className="buttonSearch" type="submit" value="Buscar" />
        </form>
      </div>

      {/* Botón para abrir el modal de login si no hay usuario logeado*/}
      {!user && (
        <div className="header-button">
          <button onClick={() => setModalType("login")}>Ingresar</button>
        </div>
      )}
      {/*CONDICIONAL PARA PROBAR SI FUNCIONA EL LOGEO Y DESLOGUEO*/}
      {user && (
        <div className="header-button">
          <button onClick={logout}>DESLOGEARSE</button>
        </div>
      )}

      {/* Renderiza el modal del login */}
      {modalType === "login" && (
        <LoginModal
          closeLoginModal={() => setModalType(null)}
          setModalType={setModalType}
        />
      )}
      {/* Renderiza el modal del registro */}
      {modalType === "register" && (
        <RegisterModal
          closeRegisterModal={() => setModalType(null)}
          setModalType={setModalType}
        />
      )}
    </header>
  );
}

export default Header;
