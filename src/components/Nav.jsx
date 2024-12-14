import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const abrir_cerrar_menu = () => {
        setMenuAbierto(!menuAbierto);
    };

    return (
        <div>
            <div className="barras">
                <button 
                    onClick={abrir_cerrar_menu} 
                    className={`boton_menu ${menuAbierto ? 'colocar_x' : ''}`}
                ></button>
            </div>
            <nav id="menu" className={`desplegable ${menuAbierto ? 'abrir_menu' : ''}`}>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/productos">PRODUCTOS</Link></li>
                <li><Link to="/arma-tu-pc">ARMÁ TU PC</Link></li>
                <li><Link to="/soporte">SOPORTE</Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default Nav;
