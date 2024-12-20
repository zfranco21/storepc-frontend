import { useState, useEffect } from 'react';

export function useFetchCategories() {
  const [categories, setCategories] = useState([]);  // Para almacenar las categorías
  const [loading, setLoading] = useState(true);  // Indicador de carga
  const [error, setError] = useState(null);  // Para manejar errores

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
  }, []);  // Este useEffect se ejecuta solo una vez al cargar el componente

  return { categories, loading, error };  // Devolver el estado de las categorías
}

