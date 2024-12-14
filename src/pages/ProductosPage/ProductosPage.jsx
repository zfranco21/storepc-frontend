import React from 'react';
import Categorias from './components/Categorias';
import ProductGrid from './components/ProductGrid';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import './ProductosPage.css';
import Footer from '../../components/Footer';


function ProductosPage() {
  return (

    <div>
      <Header />
      <Nav />
    <div className="productos-page">
      <h1>Nuestros Productos</h1>
      {/* Aquí agregas los productos destacados o cualquier lógica necesaria */}
      
      <Categorias />
      <ProductGrid />
    </div>
      <Footer />
    </div>

  );
}

export default ProductosPage;
