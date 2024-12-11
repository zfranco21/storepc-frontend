import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Anuncio from './components/Anuncio';
import Blackweek from './components/Blackweek';
function App() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Anuncio />
        {<Blackweek />}
      </main>
    </div>
  );
}

export default App;


