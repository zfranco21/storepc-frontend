import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Anuncio from './components/Anuncio';
import Blackweek from './components/Blackweek';
import Sponsor from './components/sponsor';
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
    </div>
  );
}

export default App;


