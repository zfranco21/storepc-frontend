// src/pages/HomePage/HomePage.jsx
import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav'; 
import Footer from '../../components/Footer'; 
import Carrito from '../../components/carrito'; 
import Anuncio from '../../components/Anuncio'; 
import Blackweek from '../../components/Blackweek';
import Sponsor from '../../components/sponsor'; 
import ProductGrid from '../ProductosPage/components/ProductGrid'; 
import { useFetchProducts } from '../../hooks/useFetchProducts';

const HomePage = () => {
  const { products, loading, error } = useFetchProducts(); // para Obtener los productos

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar productos: {error}</p>;
  }

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Anuncio />
        <Blackweek />
        {/* Pasar los productos a ProductGrid */}
        <ProductGrid products={products} />
      </main>
      <footer>
        <Sponsor />
        <Footer />
        <Carrito />
      </footer>
    </>
  );
};

export default HomePage;
