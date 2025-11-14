import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo-Ibmec.svg";

export default function Header({ onOpenLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Fecha o menu ao aumentar a tela ou esc
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 600) setMenuOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  //traar e destravar o sroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header__top-bar" />

      <div className="container header__container">
        <Link
          to="/"
          className="header__logo"
          aria-label="Logo Ibmec"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo Ibmec" />
        </Link>

        <button
          type="button"
          className="header__menu-toggle"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="burger" />
        </button>

        <nav
          id="primary-navigation"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-label="navegação principal"
        >
          <ul onClick={closeMenu}>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/quem-somos">Quem Somos</Link>
            </li>

            {isHome && (
              <>
                <li>
                  <a href="#projetos">Projetos</a>
                </li>
                <li>
                  <a href="#depoimentos">Depoimentos</a>
                </li>
              </>
            )}

            <li className="header__mobile-only">
              <button
                type="button"
                className="btn btn--entrar"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLogin?.();
                  closeMenu();
                }}
              >
                Entrar
              </button>
            </li>
            <li className="header__mobile-only">
              <Link to="/cadastro" className="btn btn--cadastre">
                Cadastre-se
              </Link>
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
          <Link to="/cadastro" className="btn btn--cadastre">
            Cadastre-se
          </Link>
        </div>
      </div>

      {menuOpen && <div className="header__overlay" onClick={closeMenu} />}
    </header>
  );
}
