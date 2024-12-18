import React from 'react';
import { useState, useContext } from 'react';
import { UserAuthContext } from "./context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrito from './components/carrito';



function App() {
  const { user } = useContext(UserAuthContext);



  return (
    <>
      <Header />
      <AppRouter />
      {user && <Carrito />}
      <Footer />
    </>
  );
}

export default App;
