const fetchProductsByCategory = async (categoryId) => {
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
  