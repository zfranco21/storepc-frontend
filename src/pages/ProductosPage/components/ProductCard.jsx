import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (

    <button
      className="product-card"
      onClick={() => {
        navigate("/ProductDetail", { state: { product } }); // Pasamos el producto como estado
      }}
    >
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <h3>{product.name}</h3>
        <h2>${product.price}</h2>
      </div>
    </button>

  );
}

export default ProductCard;
