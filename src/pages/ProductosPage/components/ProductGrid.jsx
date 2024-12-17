import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ products }) {
  // Verificar los productos recibidos (para depuración)
  console.log("Productos recibidos en ProductGrid:", products);

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
