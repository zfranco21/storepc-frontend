import React from 'react';

function Categorias() {
  const categories = [
    'Equipos y Notebooks',
    'Monitores',
    'Procesadores',
    'Placas de Video',
    'Memorias RAM',
    'Discos Duros',
    'Auriculares',
    'Fuentes',
    'Mouses',
    'Teclados',
    'Gabinetes',
    'Fuentes',
  ];

  return (
    <div className="categorias">
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
