import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Importar el contexto del carrito
import "./ProductDetail.css";
import { useFetchCategories } from "../../hooks/useFetchCategories";

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { categories: categoriesData } = useFetchCategories();
    const { dispatch } = useCart(); // Acceder al dispatch del carrito

    const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada

    const product = location.state?.product;

    if (!product) {
        navigate("/");
        return null;
    }

    const categoryList = categoriesData.categories || [];
    const categoryName = categoryList.find(
        (category) => category._id === product.category
    ) || "Desconocida";

    // Función para manejar el agregado al carrito
    const handleAddToCart = () => {
        const quantityNumber = Number(quantity);
        if (product.stock > 0 && quantityNumber > 0 && quantityNumber <= product.stock) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    product,
                    quantity: quantityNumber,
                },
            });
            alert("Articulo agregado al carrito");
        } else {
            alert("La cantidad seleccionada no es válida.");
        }
    };

    return (
        <div className="product-detail-page">
            <div className="breadcrumb">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Volver
                </button>
                <span> / Categoría: {categoryName}</span>
            </div>
            <div className="product-detail-container">
                <div className="product-images">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-detail-img"
                    />
                </div>
                <div className="product-detail-info">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p
                        className={`product-stock ${product.stock > 0 ? "in-stock" : "out-of-stock"
                            }`}
                    >
                        {product.stock > 0 ? "En stock" : "Sin stock"}
                    </p>
                    <p className="product-description">{product.description}</p>
                    <div>
                        <label htmlFor="quantity">Cantidad: </label>
                        <input
                            type="number"
                            id="quantity"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            disabled={product.stock <= 0}
                        />
                    </div>
                    <button
                        className="add-to-cart-button"
                        onClick={handleAddToCart}
                        disabled={product.stock <= 0}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}
