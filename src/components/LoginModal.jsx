import { useState } from "react";
import { useAuth } from "../context/UserAuthContext";
import "./LoginModal.css"; // Archivo CSS externo

export default function LoginModal({ closeModal }) {
  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    console.log("email:", email);
    console.log("password:", password);
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
        closeModal(); // Cierra el modal al iniciar sesión con éxito
      } else {
        throw new Error("Error de autenticación");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={closeModal} className="modal-close-button">
          ✕
        </button>
        <h2 className="modal-title">Accede con tu cuenta</h2>
        <div className="form-group">
          <label className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-input"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            className="form-input"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="modal-submit-button">
          Iniciar sesión
        </button>
        {error && <p className="error-message">{error}</p>}
        <p className="modal-footer">
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="register-link">
            Crear una cuenta
          </a>
        </p>
      </div>
    </div>
  );
}
