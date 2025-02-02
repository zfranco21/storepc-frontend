import './Products.css';
import React from 'react';

const Products = ({ name, price, image }) => {
  return (
    <div>
    <section className='container'>
      <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
    </section>

    
    </div>
  );
};

export default Products;
