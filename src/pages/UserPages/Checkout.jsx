import React from "react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
    const { cart, dispatch } = useCart();

    const handleAdressChange = (e) => {
        dispatch({ type: "SET_ADRESS", payload: e.target.value });
    };

    const handleTelephoneChange = (e) => {
        dispatch({ type: "SET_TELEPHONE", payload: e.target.value });
    };

    const handleCommentChange = (e) => {
        dispatch({ type: "SET_COMMENT", payload: e.target.value });
    };

    const handleCheckout = () => {
        const order = {
            user: cart.user,
            products: cart.items.map((item) => ({
                product: item.product.id,
                quantity: item.quantity,
                price: item.price,
            })),
            totalPrice: cart.totalPrice,
            adress: cart.adress,
            telephone: cart.telephone,
            comment: cart.comment,
        };

        console.log("Orden creada:", order);

        // Aquí puedes enviar la orden al backend
        // fetch("http://localhost:3000/orders", { method: "POST", body: JSON.stringify(order) })
    };

    return (
        <div>
            <h1>Checkout</h1>
            <input
                type="text"
                placeholder="Dirección"
                value={cart.adress}
                onChange={handleAdressChange}
            />
            <input
                type="text"
                placeholder="Teléfono"
                value={cart.telephone}
                onChange={handleTelephoneChange}
            />
            <textarea
                placeholder="Comentario"
                value={cart.comment}
                onChange={handleCommentChange}
            />
            <button onClick={handleCheckout}>Finalizar Compra</button>
        </div>
    );
};

export default Checkout;
