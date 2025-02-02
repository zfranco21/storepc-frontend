// src/pages/HomePage/HomePage.jsx
import React from 'react';
<<<<<<< HEAD
import Header from '../../components/Header';
import Nav from '../../components/Nav'; 
import Footer from '../../components/Footer'; 
import Carrito from '../../components/carrito'; 
import Anuncio from '../../components/Anuncio'; 
import Blackweek from '../../components/Blackweek';
import Sponsor from '../../components/sponsor'; 
import ProductGrid from '../ProductosPage/components/ProductGrid'; 
=======
import Nav from '../../components/Nav';
import Anuncio from '../../components/Anuncio';
import Blackweek from '../../components/Blackweek';
import Sponsor from '../../components/sponsor';
import ProductGrid from '../ProductosPage/components/ProductGrid';
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
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
<<<<<<< HEAD
      <Header />
=======
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
      <Nav />
      <main>
        <Anuncio />
        <Blackweek />
        {/* Pasar los productos a ProductGrid */}
        <ProductGrid products={products} />
      </main>
      <footer>
        <Sponsor />
<<<<<<< HEAD
        <Footer />
        <Carrito />
=======
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
      </footer>
    </>
  );
};

export default HomePage;
