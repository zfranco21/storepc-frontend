import React from "react";
import Blackweek from "../../components/Blackweek";
import Carrito from "../../components/carrito";
import Products from "../../components/products";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

function Productos() {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <Blackweek />
        <Products   />
        <Products   />
      </main>
      <footer>
        <Carrito />
      </footer>
    </div>
  );
}

export default Productos;
