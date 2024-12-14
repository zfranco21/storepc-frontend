import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importación correcta de Routes y Route
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrito from './components/carrito';
import Anuncio from './components/Anuncio';
import Blackweek from './components/Blackweek';
import Sponsor from './components/sponsor';
import Soporte from './pages/SoportePage/SoportePage';
import Productos from './pages/ProductosPage/ProductosPage';
import Products from './components/products';

function App() {
  return (
    <>
      <Header />
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Anuncio />
              <Blackweek />
              <Products />
              <Sponsor />
            </>
          } />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </main>
      <footer>
        <Footer />
        <Carrito />
      </footer>
    </>
  );
}

export default App;
