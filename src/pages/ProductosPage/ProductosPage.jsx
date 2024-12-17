import React from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import Categorias from './components/Categorias';
import ProductGrid from './components/ProductGrid';
import './ProductosPage.css';

function ProductosPage() {
  const { products, loading: productsLoading, error: productsError } = useFetchProducts();
  const { categories, loading: categoriesLoading, error: categoriesError } = useFetchCategories();

  if (productsLoading || categoriesLoading) {
    return <p>Cargando...</p>;
  }

  if (productsError || categoriesError) {
    return <p>{productsError || categoriesError}</p>;
  }

  return (
    <div>
      <div className="productos-page">
        <h1>Nuestros Productos</h1>

        {/* Mostrar categorías y productos */}
        <Categorias categories={categories} />
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default ProductosPage;
