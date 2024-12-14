import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#monitores">Monitores</a>
          <a href="#teclados">Teclados</a>
          <a href="#mouse">Mouse</a>
          <a href="#procesadores">Procesadores</a>
          <a href="#fuentes">Fuentes</a>
          <a href="#placas-de-video">Placas de Video</a>
          <a href="#ram">Memoria RAM</a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} StorePC. Todos los derechos reservados a los desarrolladores. 
          <a className='desarrolladores' href="https://github.com/zfranco21" target="_blank" rel="noopener noreferrer"><b> Franco Herrera</b></a> y&nbsp;
          <a className='desarrolladores' href="https://github.com/alfarofernando" target="_blank" rel="noopener noreferrer"><b>Fernando Alfaro</b></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
