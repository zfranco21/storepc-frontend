import "./LoginModal.css";
import { useLogin } from "../hooks/useLogin";

export default function LoginModal({ closeLoginModal, setModalType }) {
  const { email, setEmail, password, setPassword, error, handleLogin } =
    useLogin(closeLoginModal);

  // movida toda la logica a un custom hook useLogin.

  function handleRegisterModal() {
    setModalType("register");
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={closeLoginModal} className="modal-close-button">
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
          ¿No tienes cuenta?
          <button className="register-link" onClick={handleRegisterModal}>
            Crear una cuenta
          </button>
        </p>
      </div>
    </div>
  );
}
