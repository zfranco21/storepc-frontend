import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const { cart, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <ul>
                {cart.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                        <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total de productos: {cart.totalItems}</p>
            <p>Precio total: ${cart.totalPrice}</p>
        </div>
    );
};

export default Cart;
