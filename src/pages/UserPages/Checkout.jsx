import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAdressChange = (e) => {
        dispatch({ type: "SET_ADRESS", payload: e.target.value });
    };

    const handleTelephoneChange = (e) => {
        dispatch({ type: "SET_TELEPHONE", payload: e.target.value });
    };

    const handleCommentChange = (e) => {
        dispatch({ type: "SET_COMMENT", payload: e.target.value });
    };

    const validateInputs = () => {
        if (!cart.adress.trim()) {
            setError("La dirección es obligatoria.");
            return false;
        }
        if (!cart.telephone.trim() || !/^\d+$/.test(cart.telephone)) {
            setError("El teléfono es obligatorio y debe contener solo números.");
            return false;
        }
        setError("");
        return true;
    };

    const handleCheckout = () => {
        if (!validateInputs()) {
            return;
        }

        setIsSubmitting(true); // Mostrar indicador de carga

        const order = {
            user: cart.user,
            products: cart.items.map((item) => ({
                product: item.product._id,
                quantity: item.quantity,
                price: item.price,
            })),
            totalPrice: cart.totalPrice,
            adress: cart.adress,
            telephone: cart.telephone,
            comment: cart.comment,
        };
        console.log("Orden a enviar:", JSON.stringify(order, null, 2));

        fetch("http://localhost:3000/orders/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((response) => {
                setIsSubmitting(false);
                if (response.ok) {
                    setIsOrderSubmitted(true);
                    dispatch({ type: "CLEAR_CART" });
                    alert("Compra enviada al administrador. MUCHAS GRACIAS POR ELEGIRNOS");
                    navigate("/PayDetail");
                } else {
                    response.json().then((data) => {
                        setError(data.error || "Error al procesar la orden.");
                    });
                }
            })
            .catch(() => {
                setIsSubmitting(false);
                setError("Hubo un problema al enviar la orden. Intenta nuevamente.");
            });


    };
    if (isOrderSubmitted) {
        return (
            <div className="checkout-success">
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu orden ha sido procesada con éxito.</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="form-group">
                <label htmlFor="adress">Dirección:</label>
                <input
                    id="adress"
                    type="text"
                    placeholder="Dirección"
                    value={cart.adress}
                    onChange={handleAdressChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Teléfono:</label>
                <input
                    id="telephone"
                    type="text"
                    placeholder="Teléfono"
                    value={cart.telephone}
                    onChange={handleTelephoneChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comentario:</label>
                <textarea
                    id="comment"
                    placeholder="Comentario adicional para el envío"
                    value={cart.comment}
                    onChange={handleCommentChange}
                />
            </div>
            {error && <p className="error-message">⚠️ {error}</p>}
            <div className="order-summary">
                <h3>Resumen de la orden:</h3>
                <div className="summary-item">
                    <strong>Total de productos:</strong>{" "}
                    {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                </div>
                <div className="summary-item">
                    <strong>Precio total:</strong> ${cart.totalPrice.toFixed(2)}
                </div>
            </div>
            <button
                className="checkout-button"
                onClick={handleCheckout}
                disabled={cart.items.length === 0 || isSubmitting}
            >
                {isSubmitting ? "Procesando..." : "Finalizar Compra"}
            </button>

        </div>
    );
};

export default Checkout;
