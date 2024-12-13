import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Anuncio from './components/Anuncio';
import Blackweek from './components/Blackweek';
import Sponsor from './components/sponsor';
import Carrito from './components/carrito';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Anuncio />
        <Blackweek />

        {/*Agregar Seccion Products*/}
        <Sponsor />
      </main>
      <footer>
        <Footer />
        <Carrito />
      </footer>
    </div>
  );
}

export default App;


