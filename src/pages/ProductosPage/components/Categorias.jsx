import React from 'react';
import './Categorias.css'; // Importa los estilos

function Categorias({ categories, onCategorySelect }) {
  return (
    <div className="categorias">
      <ul>
        <li onClick={() => onCategorySelect(null)} className="categoria-item">
          Todas
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onCategorySelect(category)}
            className="categoria-item"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
