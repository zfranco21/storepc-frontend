import { useState, useEffect } from 'react';

export function useFetchProducts() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
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
  }, []);  // Este useEffect se ejecuta solo una vez al cargar el componente

  return { products, loading, error };  // Devolver el estado de los productos
}

