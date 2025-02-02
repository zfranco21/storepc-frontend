import './Carrito.css';
import logoCarrito from '../assets/carrito.svg';

const Carrito = () => {
    return (
        <div>
            <button className='carrito'><img className='imgCarrito' src={logoCarrito} alt="" /></button>
        </div>        
    );
};

export default Carrito;