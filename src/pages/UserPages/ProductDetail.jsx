import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    if (!product) {
        navigate("/");
        return null;
    }

    return (
        <div className="product-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Volver
            </button>
            <div className="product-detail-card">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-detail-img"
                />
                <div className="product-detail-info">
                    <h1>{product.name}</h1>
                    <p className="product-detail-description">{product.description}</p>
                    <p>
                        <strong>Precio:</strong> ${product.price}
                    </p>
                    <p>
                        <strong>Stock:</strong> {product.stock} unidades disponibles
                    </p>
                    <p>
                        <strong>Categoría:</strong> {product.category.name}
                    </p>
                    <button className="add-to-cart-button">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}
