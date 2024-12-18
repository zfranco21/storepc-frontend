import React from "react";
import { useCart } from "../../context/CartContext"; // Importar el hook del carrito
import { useNavigate } from "react-router-dom"; // Importar el hook de navegación
import "./CartDetail.css";

const Cart = () => {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate(); // Crear el hook de navegación

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    const handleIncrement = (id) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: 1 } });
    };


    const handleDecrement = (id, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: -1 } });
        } else {
            handleRemove(id); // Opcional: Si llega a 1, elimina el producto.
        }
    };

    const handleProceedToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito de Compras</h1>
            <ul className="cart-items">
                {cart.items.length === 0 ? (
                    <li className="no-items">No hay productos en el carrito</li>
                ) : (
                    cart.items.map((item) => (
                        <li className="cart-item" key={item.product._id}>
                            <div>
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    width="50"
                                    height="50"
                                />
                                <p>{item.product.name}</p>
                                <p>Precio: ${item.price.toFixed(2)}</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => handleDecrement(item.product._id, item.quantity)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.product._id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.product._id)}
                                    className="remove-button"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <div className="cart-summary">
                <h3>Resumen:</h3>
                <p>Total de productos: {cart.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
                <p>Precio total: ${cart.totalPrice.toFixed(2)}</p>
                {/* Botón para proceder al Checkout */}
                <button
                    className="checkout-button"
                    onClick={handleProceedToCheckout}
                    disabled={cart.items.length === 0} // Desactivar si no hay productos
                >
                    Proceder al Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
