import React from 'react';
import './ProductCard.css';
<<<<<<< HEAD

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <h2>${product.price}</h2>
      <button>Ver más</button>
    </div>
=======
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

>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
  );
}

export default ProductCard;
