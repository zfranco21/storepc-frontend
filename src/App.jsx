import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Anuncio from './components/Anuncio';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Anuncio />
        {/* Aquí va el contenido principal de tu app */}
      </main>
    </div>
  );
}

export default App;
