import React from 'react';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrito from './components/carrito';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Carrito />
      <Footer />
    </>
  );
}

export default App;
