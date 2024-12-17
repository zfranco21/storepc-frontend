import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ products = [], selectedCategory }) {
  // Filtrar productos según la categoría seleccionada
  const filteredProducts = Array.isArray(products)
    ? selectedCategory
      ? products.filter((product) => product.category === selectedCategory.name)
      : products
    : [];

  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id || product.name} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles para esta categoría.</p>
      )}
    </div>
  );
}

export default ProductGrid;
