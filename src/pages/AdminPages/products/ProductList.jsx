import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });
  const [categories, setCategories] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://store-pc-backend.vercel.app/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const productOptions = products.map((product) => ({
    value: product._id,
    label: `${product.name} (${product.price} USD)`,
    product,
  }));

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://store-pc-backend.vercel.app/categories");
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }
        const data = await response.json();
        setCategories(data);
        setCategoryOptions(
          data.map((category) => ({
            value: category._id,
            label: category.name,
          }))
        );
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedProduct(selectedOption.product);
    setUpdatedProduct(selectedOption.product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    } else {
      setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCategoryChange = (selectedOption) => {
    if (isAdding) {
      setNewProduct((prev) => ({ ...prev, category: selectedOption.value }));
    } else if (isEditing) {
      setUpdatedProduct((prev) => ({
        ...prev,
        category: selectedOption.value,
      }));
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("https://store-pc-backend.vercel.app/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Error al agregar el producto");
      }
      const data = await response.json();
      setProducts((prev) => [...prev, data]);
      setIsAdding(false);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleToggleState = async () => {
    try {
      const newState = !selectedProduct.isEnabled; // Cambio de estado
      const response = await fetch(
        `https://store-pc-backend.vercel.app/products/${selectedProduct._id}/state`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isEnabled: newState }), // Enviar el nuevo estado
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el estado del producto");
      }

      const data = await response.json();
      // Actualiza el estado del producto localmente en el frontend
      setSelectedProduct((prev) => ({
        ...prev,
        isEnabled: data.product.isEnabled, // Asegúrate de que sea el producto con el estado actualizado
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(
        `https://store-pc-backend.vercel.app/products/${selectedProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }
      const data = await response.json();
      setSelectedProduct(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="product-list__loading">
        <span>Cargando productos...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list__error">
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <>
      <div className="product-list__container">
        <button
          className="product-list__back-button"
          onClick={() => navigate("/AdminDashboard")}
        >
          Volver al Dashboard
        </button>

        <h1 className="product-list__title">Gestión de Productos</h1>

        <Select
          className="product-list__select"
          options={productOptions}
          onChange={handleChange}
          placeholder="Selecciona un producto"
          isSearchable
        />

        <button
          className="product-list__button product-list__button--add"
          onClick={() => setIsAdding(true)}
        >
          Agregar Producto
        </button>

        {isAdding || isEditing ? (
          <div className="product-list__add-form">
            <h2 className="product-list__details-title">
              {isAdding ? "Agregar Producto" : "Editar Producto"}
            </h2>
            <input
              type="text"
              name="name"
              value={isAdding ? newProduct.name : updatedProduct.name || ""}
              onChange={handleInputChange}
              placeholder="Nombre del producto"
              className="product-list__input"
            />
            <textarea
              name="description"
              value={
                isAdding
                  ? newProduct.description
                  : updatedProduct.description || ""
              }
              onChange={handleInputChange}
              placeholder="Descripción"
              className="product-list__input"
            ></textarea>
            <input
              type="number"
              name="price"
              value={isAdding ? newProduct.price : updatedProduct.price || ""}
              onChange={handleInputChange}
              placeholder="Precio"
              className="product-list__input"
            />
            <input
              type="number"
              name="stock"
              value={isAdding ? newProduct.stock : updatedProduct.stock || ""}
              onChange={handleInputChange}
              placeholder="Stock"
              className="product-list__input"
            />
            <Select
              className="product-list__select"
              options={categoryOptions}
              onChange={handleCategoryChange}
              placeholder="Selecciona una categoría"
              isSearchable
              value={categoryOptions.find(
                (option) =>
                  option.value ===
                  (isAdding ? newProduct.category : updatedProduct.category)
              )}
            />
            <input
              type="text"
              name="image"
              value={isAdding ? newProduct.image : updatedProduct.image || ""}
              onChange={handleInputChange}
              placeholder="URL de la imagen"
              className="product-list__input"
            />
            <button
              className="product-list__button product-list__button--save"
              onClick={isAdding ? handleAddProduct : handleUpdateProduct}
            >
              {isAdding ? "Guardar Producto" : "Guardar Cambios"}
            </button>
            <button
              className="product-list__button product-list__button--cancel"
              onClick={() => {
                setIsAdding(false);
                setIsEditing(false);
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          selectedProduct && (
            <div className="product-list__details">
              <h2 className="product-list__details-title">
                Producto seleccionado:
              </h2>

              <p className="product-list__details-item">
                Nombre: {selectedProduct.name}
              </p>
              <p className="product-list__details-item">
                Descripción: {selectedProduct.description}
              </p>
              <p className="product-list__details-item">
                Stock: {selectedProduct.stock}
              </p>
              <p className="product-list__details-item">
                Precio: {selectedProduct.price} USD
              </p>
              <p className="product-list__details-item">
                Estado:{" "}
                {selectedProduct.isEnabled ? "Habilitado" : "Deshabilitado"}
              </p>
              <p className="product-list__details-item">
                Imagen:{" "}
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="product-list__image-thumbnail"
                />
              </p>
              <button
                className="product-list__button product-list__button--toggle"
                onClick={handleToggleState}
              >
                {selectedProduct.isEnabled ? "Deshabilitar" : "Habilitar"}
              </button>

              <button
                className="product-list__button product-list__button--edit"
                onClick={() => setIsEditing(true)}
              >
                Editar Producto
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default ProductList;
