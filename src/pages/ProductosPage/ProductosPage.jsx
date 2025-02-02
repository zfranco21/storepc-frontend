import React, { useState } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import Categorias from './components/Categorias';
import ProductGrid from './components/ProductGrid';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import './ProductosPage.css';

function ProductosPage() {
  const { products, loading: productsLoading, error: productsError } = useFetchProducts();
  const { categories, loading: categoriesLoading, error: categoriesError } = useFetchCategories();
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  if (productsLoading || categoriesLoading) {
    return <p>Cargando...</p>;
  }

  if (productsError || categoriesError) {
    return <p>{productsError || categoriesError}</p>;
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="productos-page">
        <h1>Nuestros Productos</h1>

        {/* Categorías clickeables */}
        <Categorias
          categories={categories}
          onCategorySelect={(category) => setSelectedCategory(category)}
        />
        
        {/* Mostrar productos según la categoría */}
        <ProductGrid
          products={products}
          selectedCategory={selectedCategory}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ProductosPage;
