const fetchProductsByCategory = async (categoryId) => {
<<<<<<< HEAD
    const url = `http://localhost:3000/products/${categoryId}/products`;  // Asegúrate de que esta URL sea la correcta
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener los productos");
      const data = await response.json();
      console.log("Productos filtrados:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  
  // Llamar esta función cuando se selecciona una categoría
  fetchProductsByCategory("id_de_la_categoria");
  
=======
  const url = `https://store-pc-backend.vercel.app/products/${categoryId}/products`;  // Asegúrate de que esta URL sea la correcta
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al obtener los productos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Llamar esta función cuando se selecciona una categoría
fetchProductsByCategory("id_de_la_categoria");
>>>>>>> 433f66746e9c6d8f9cc048ecd830bd947de99c82
