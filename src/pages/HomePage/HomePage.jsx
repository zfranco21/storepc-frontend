// src/pages/HomePage/HomePage.jsx
import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav'; 
import Footer from '../../components/Footer'; 
import Carrito from '../../components/carrito'; 
import Anuncio from '../../components/Anuncio'; 
import Blackweek from '../../components/Blackweek';
import Sponsor from '../../components/sponsor'; 
import Productos from '../ProductosPage/ProductosPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Anuncio />
        <Blackweek />
        <Productos />
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
