import { useState } from "react";
import { useAuth } from "../context/UserAuthContext";

export const useLogin = (closeModal) => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Credenciales incorrectas");
      }

      console.log(data); // Revisa la respuesta que llega del backend

      if (data.user) {
        setUser(data.user);
        closeModal();
      } else {
        throw new Error("Error de autenticación");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
};
