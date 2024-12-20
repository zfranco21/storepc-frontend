import React from 'react';
import './Categorias.css';

function Categorias({ categories, onCategorySelect, selectedCategory }) {
  return (
    <div className="categorias">
      <ul>
        {/* Opción para mostrar todos los productos */}
        <li
          onClick={() => onCategorySelect(null)}
          className={`categoria-item ${selectedCategory === null ? 'selected' : ''}`}
        >
          Todas
        </li>
        {/* Mapeo de categorías */}
        {categories.length > 0 ? (
          categories.map((category) => (
            <li
              key={category._id}
              onClick={() => onCategorySelect(category._id)}  // Pasamos el _id de la categoría
              className={`categoria-item ${selectedCategory === category._id ? 'selected' : ''}`}
            >
              {category.name}
            </li>
          ))
        ) : (
          <li className="categoria-item">No hay categorías disponibles</li>
        )}
      </ul>
    </div>
  );
}

export default Categorias;
