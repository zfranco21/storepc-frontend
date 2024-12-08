import './Header.css';
import { useState } from 'react';
import logo from '../assets/logo.svg';

function Header() {
  // Estado para el valor del buscador
  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar el cambio en el buscador
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    if (searchTerm.trim() === '') {
      alert('Por favor ingresa un término de búsqueda.');
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

      {/* Botón */}
      <div className="header-button">
        <button onClick={() => alert('Botón de Ingreso clickeado')}>Ingresar</button>
      </div>
    </header>
  );
}

export default Header;
