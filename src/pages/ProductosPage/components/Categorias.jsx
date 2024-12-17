import React from 'react';

function Categorias({ categories, onCategorySelect }) {
  return (
    <div className="categorias">
      <ul>
        <li onClick={() => onCategorySelect(null)}>Todas</li>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategorySelect(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
