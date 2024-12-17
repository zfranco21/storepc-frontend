import { useNavigate } from 'react-router-dom';
import './Carrito.css';
import logoCarrito from '../assets/carrito.svg';

const Carrito = ({ itemCount }) => {
    const navigate = useNavigate();

    return (
        <button
            className='carrito'
            onClick={() => { navigate("/CartDetail") }}
            aria-label="Ir al carrito de compras"
        >
            <img className='imgCarrito' src={logoCarrito} alt="Icono del carrito" />
            {itemCount > 0 && <span className="numberCarrito">{itemCount}</span>}
        </button>
    );
};

export default Carrito;
