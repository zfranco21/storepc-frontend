import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./CategoriesList.css";

function CategoryList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://store-pc-backend.vercel.app/categories");
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption ? selectedOption.category : null);
    setUpdatedCategory(selectedOption ? selectedOption.category : {});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewCategory((prev) => ({ ...prev, [name]: value }));
    } else {
      setUpdatedCategory((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await fetch("https://store-pc-backend.vercel.app/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      if (!response.ok) {
        throw new Error("Error al agregar la categoría");
      }
      const data = await response.json();
      setCategories((prev) => [...prev, data]);
      setIsAdding(false);
      setNewCategory({
        name: "",
        description: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdateCategory = async () => {
    try {
      const response = await fetch(
        `https://store-pc-backend.vercel.app/categories/${selectedCategory._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCategory),
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
      }
      const data = await response.json();
      setSelectedCategory(data);
      setIsEditing(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="category-list__loading">
        <span>Cargando categorías...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-list__error">
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <>

      <div className="category-list__container">
        <button
          className="category-list__back-button"
          onClick={() => navigate("/AdminDashboard")}
        >
          Volver al Dashboard
        </button>

        <h1 className="category-list__title">Gestión de Categorías</h1>

        <Select
          className="category-list__select"
          options={categories.map((category) => ({
            value: category._id,
            label: category.name,
            category, // Almacenar el objeto completo
          }))}
          onChange={handleCategoryChange}
          placeholder="Selecciona una categoría"
          isSearchable
        />

        <button
          className="category-list__button category-list__button--add"
          onClick={() => setIsAdding(true)}
        >
          Agregar Categoría
        </button>

        {isAdding || isEditing ? (
          <div className="category-list__add-form">
            <h2 className="category-list__details-title">
              {isAdding ? "Agregar Categoría" : "Editar Categoría"}
            </h2>
            <input
              type="text"
              name="name"
              value={isAdding ? newCategory.name : updatedCategory.name || ""}
              onChange={handleInputChange}
              placeholder="Nombre de la categoría"
              className="category-list__input"
            />
            <textarea
              name="description"
              value={
                isAdding
                  ? newCategory.description
                  : updatedCategory.description || ""
              }
              onChange={handleInputChange}
              placeholder="Descripción"
              className="category-list__input"
            ></textarea>
            <button
              className="category-list__button category-list__button--save"
              onClick={isAdding ? handleAddCategory : handleUpdateCategory}
            >
              {isAdding ? "Guardar Categoría" : "Guardar Cambios"}
            </button>
            <button
              className="category-list__button category-list__button--cancel"
              onClick={() => {
                setIsAdding(false);
                setIsEditing(false);
              }}
            >
              Cancelar
            </button>
          </div>
        ) : (
          selectedCategory && (
            <div className="category-list__details">
              <h2 className="category-list__details-title">
                Categoría seleccionada:
              </h2>
              <p className="category-list__details-item">
                Nombre: {selectedCategory.name}
              </p>
              <p className="category-list__details-item">
                Descripción: {selectedCategory.description}
              </p>
              <button
                className="category-list__button category-list__button--edit"
                onClick={() => setIsEditing(true)}
              >
                Editar Categoría
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default CategoryList;
