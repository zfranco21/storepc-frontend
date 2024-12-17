import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Soporte from './pages/SoportePage/SoportePage';
import Productos from './pages/ProductosPage/ProductosPage';
import ArmadoPC from './pages/ArmadoPCPage/ArmadoPCPage';
import HomePage from './pages/HomePage/HomePage'; // Página de inicio

function App() {
  return (
    <>
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/arma-tu-pc" element={<ArmadoPC />} />
        <Route path="/soporte" element={<Soporte />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
