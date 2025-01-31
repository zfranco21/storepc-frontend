import { useState } from "react";

export const useRegister = ({ closeRegisterModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await fetch("https://store-pc-backend.vercel.app/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en registro de usuario");
      }


      if (data.user) {
        setUser(data.user);
        closeRegisterModal();
      } else {
        throw new Error("Usuario Creado Correctamente");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleRegister,
  };
};
