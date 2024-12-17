import { useNavigate } from 'react-router-dom';
import './Carrito.css';
import logoCarrito from '../assets/carrito.svg';

const Carrito = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button className='carrito' onClick={() => { navigate("/CartDetail") }}><img className='imgCarrito' src={logoCarrito} alt="" /></button>
        </div>
    );
};

export default Carrito;