import { useState, useEffect } from "react";

export function useFetchUsers() {
  const [users, setUsers] = useState([]); // Para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://store-pc-backend.vercel.app/users"); // Endpoint para obtener usuarios
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }
        const data = await response.json();
        setUsers(data); // Guardar los datos en el estado
      } catch (err) {
        setError(err.message); // Guardar el mensaje de error
      } finally {
        setLoading(false); // Terminar la carga
      }
    };

    fetchUsers();
  }, []); // Solo se ejecuta una vez al montar el componente

  // Devolver los datos y estados del hook
  return { users, loading, error };
}
