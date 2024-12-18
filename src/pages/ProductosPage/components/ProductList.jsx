import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Categorias from "./Categorias"; // Importa el componente de categorías
import Header from "../../../components/Header";
import { useFetchProducts } from "../../hooks/useFetchProducts"; // Importa el hook

function ProductList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Nueva categoría seleccionada
  const { products, loading, error } = useFetchProducts(selectedCategory); // Usamos el hook para obtener productos filtrados

  // Obtener categorías
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        if (!response.ok) throw new Error("Error al obtener las categorías");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, []);

  // Manejador para la selección de categorías
  const handleCategorySelect = (categoryId) => {
    console.log('Categoría seleccionada:', categoryId);  // Verifica el ID de la categoría
    setSelectedCategory(categoryId); // Actualiza la categoría seleccionada
  };
  
  if (loading) {
    return <div className="product-list__loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="product-list__error">Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="product-list__container">
        <Categorias
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />

        <h1 className="product-list__title">
          {selectedCategory
            ? `Productos de la categoría: ${categories.find(
                (cat) => cat._id === selectedCategory
              )?.name}`
            : "Todos los productos"}
        </h1>

        <ul className="product-list__items">
          {products.map((product) => (
            <li key={product._id} className="product-list__item">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span>Precio: ${product.price}</span>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
