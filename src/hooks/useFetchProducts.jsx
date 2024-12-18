import { useState, useEffect } from 'react';

export function useFetchProducts(categoryId = null) {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);  // Indicamos que estamos cargando

      try {
        const url = categoryId
          ? `http://localhost:3000/products/${categoryId}/products` // URL con filtro de categoría
          : "http://localhost:3000/products";  // URL para obtener todos los productos
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);  // Guardar los productos en el estado
      } catch (err) {
        setError(err.message);  // Manejar el error
      } finally {
        setLoading(false);  // Terminar la carga
      }
    };

    fetchProducts();
  }, [categoryId]);  // El useEffect se vuelve a ejecutar cuando cambie categoryId

  return { products, loading, error };  // Devolver el estado de los productos
}
