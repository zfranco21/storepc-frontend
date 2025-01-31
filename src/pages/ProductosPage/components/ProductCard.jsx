import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <h2>${product.price}</h2>
      <button>Ver más</button>
    </div>
  );
}

export default ProductCard;
