import './Nav.css';
import { useState } from 'react';

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
                        <li><a href="#">PRODUCTOS</a></li>
                        <li><a href="#">ARMÁ TU PC</a></li>
                        <li><a href="#">NOTEBOOKS</a></li>
                        <li><a href="#">SOPORTE</a></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Nav;
