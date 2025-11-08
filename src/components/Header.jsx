import logo from "../assets/img/logo-ibmec.svg";

export default function Header({ onOpenLogin }) {
  return (
    <header className="site-header">
      <div className="header__top-bar" />
      <div className="container header__container">
        <a href="/" className="header__logo" aria-label="Logo Ibmec">
          <img src={logo} alt="Logo Ibmec" />
        </a>

        <nav className="header__nav" aria-label="navegação principal">
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/quem-somos">Quem Somos</a>
            </li>

            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="btn btn--entrar abrirLoginBtn"
            onClick={onOpenLogin}
          >
            Entrar
          </button>
          <a href="/cadastro" className="btn btn--cadastre">
            Cadastre-se
          </a>
        </div>
      </div>
    </header>
  );
}
