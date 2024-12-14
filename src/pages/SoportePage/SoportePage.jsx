import React from "react";
import Carrito from "../../components/carrito";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function Soporte() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <div>
        <h2>Falta contenido de Soporte</h2>
        <p>Pronto lo agrego</p>
        </div>
      {/* Contenido de Soporte (acordion de preguntas frecuentes) */}  

      </main>
      <footer>
        <Footer />
        <Carrito />
      </footer>
    </div>
  );
}

export default Soporte;
