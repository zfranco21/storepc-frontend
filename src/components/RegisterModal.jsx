import "./LoginModal.css";
import { useRegister } from "../hooks/useRegister";

export default function RegisterModal({ closeRegisterModal }) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleRegister,
  } = useRegister(closeRegisterModal);

  // movida toda la logica a un custom hook useRegister.

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={closeRegisterModal} className="modal-close-button">
          ✕
        </button>
        <h2 className="modal-title">Cree una nueva cuenta</h2>
        {/* Nombre */}
        <div className="form-group">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-input"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Email */}
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
        {/* Contraseña */}
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
        <button onClick={handleRegister} className="modal-submit-button">
          Crear Cuenta
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}
