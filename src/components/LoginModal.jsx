import "../styles/styleLogin.css";

export default function LoginModal({ open, onClose }) {
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      id="loginOverlay"
      className={`modal-overlay ${open ? "visivel" : ""}`}
      onClick={onOverlayClick}
      aria-hidden={!open}
      aria-modal="true"
      role="dialog"
    >
      <div className="login-modal">
        <button
          className="close-btn"
          id="fecharModal"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>
        <div className="logo">
          <img src="/img/logo-Ibmec.svg" alt="ibmec" />
        </div>
        <p className="title">Entre na sua conta</p>

        <form
          id="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="input-group">
            <input type="email" placeholder="Email@dominio.com" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Senha" required />
          </div>
          <button type="submit" className="btn-confirm">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
