import React from "react";
import Blackweek from "../../components/Blackweek";
import Carrito from "../../components/carrito";
import Products from "../../components/products";

function Productos() {
  return (
    <div>
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
