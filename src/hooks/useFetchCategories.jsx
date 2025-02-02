import { useState, useEffect } from 'react';

export function useFetchCategories() {
  const [categories, setCategories] = useState([]);  // Para almacenar las categorías
  const [loading, setLoading] = useState(true);  // Indicador de carga
  const [error, setError] = useState(null);  // Para manejar errores

  useEffect(() => {
    const fetchCategories = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch("http://localhost:3000/categories");
=======
        const response = await fetch("https://store-pc-backend.vercel.app/categories");
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }
        const data = await response.json();
<<<<<<< HEAD
        setCategories(data); 
      } catch (err) {
        setError(err.message); 
=======
        setCategories(data);
      } catch (err) {
        setError(err.message);
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);  // Este useEffect se ejecuta solo una vez al cargar el componente

  return { categories, loading, error };  // Devolver el estado de las categorías
}

