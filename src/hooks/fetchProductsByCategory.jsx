const fetchProductsByCategory = async (categoryId) => {
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
