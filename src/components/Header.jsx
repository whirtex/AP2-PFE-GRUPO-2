// PASSO 1: Adicione 'useRef' e remova 'useLocation' e 'useNavigate'
import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-Ibmec.svg";

export default function Header({ onOpenLogin }) {
  // Estado do menu mobile (hambúrguer)
  const [menuOpen, setMenuOpen] = useState(false);

  // Estado do megamenu de "Projetos" (Desktop / hover)
  const [isProjetosMenuOpen, setIsProjetosMenuOpen] = useState(false);

  // Estado do acordeão "Projetos" (Mobile / clique)
  const [isMobileProjetosOpen, setIsMobileProjetosOpen] = useState(false);

  // PASSO 2: Adicione a ref para o timer
  const closeTimer = useRef(null);

  // Efeito para fechar menu mobile no resize ou com "Esc"
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

  // Efeito para travar o scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // PASSO 3: Adicione as funções de "entrar" e "sair" com o timer
  const handleMenuEnter = () => {
    // Cancela qualquer timer de fechamento que esteja pendente
    clearTimeout(closeTimer.current);
    // Abre o menu
    setIsProjetosMenuOpen(true);
  };

  const handleMenuLeave = () => {
    // Inicia um novo timer para fechar o menu
    closeTimer.current = setTimeout(() => {
      setIsProjetosMenuOpen(false);
    }, 200); // 200ms de "período de carência"
  };

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
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" onClick={closeMenu}>
                Quem Somos
              </Link>
            </li>

            {/* ===== PROJETOS (MOBILE / ACORDEÃO) ===== */}
            <li
              className={`
                header__mobile-only 
                header__mobile-accordion 
                ${isMobileProjetosOpen ? "accordion--open" : ""}
              `}
            >
              <a
                href="#projetos"
                className="accordion-trigger"
                onClick={(e) => {
                  e.preventDefault(); // Previne o scroll
                  setIsMobileProjetosOpen((v) => !v); // Abre/fecha acordeão
                }}
              >
                Projetos
                <span className="accordion-arrow" />
              </a>

              {/* === VERSÃO 100% CORRIGIDA (Mobile) === */}
              {isMobileProjetosOpen && (
                <ul className="accordion-submenu">
                  <li>
                    <Link to="/projetos/direito" onClick={closeMenu}>
                      Direito
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/arquitetura" onClick={closeMenu}>
                      Arquitetura
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/front-end" onClick={closeMenu}>
                      Front-end
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/administracao" onClick={closeMenu}>
                      Administração
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/economia" onClick={closeMenu}>
                      Economia e Finanças
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/ux" onClick={closeMenu}>
                      User Experience
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/marketing" onClick={closeMenu}>
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/ia" onClick={closeMenu}>
                      Inteligência Artificial
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/back-end" onClick={closeMenu}>
                      Back-end
                    </Link>
                  </li>
                  <li>
                    <Link to="/projetos/mobile" onClick={closeMenu}>
                      Mobile
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* ===== PROJETOS (DESKTOP / MEGAMENU) ===== */}
            {/* PASSO 4: Aplique as novas funções de hover aqui */}
            <li
              className="nav-item-dropdown header__desktop-only"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <span className="nav-link-trigger">
                Projetos
                <span className="accordion-arrow dropdown-arrow" />
              </span>

              {/* === VERSÃO 100% CORRIGIDA (Desktop) === */}
              {isProjetosMenuOpen && (
                // E aplique aqui também
                <div
                  className="megamenu-container"
                  onMouseEnter={handleMenuEnter}
                  onMouseLeave={handleMenuLeave}
                >
                  <div className="megamenu-grid">
                    {/* Coluna 1 */}
                    <div className="megamenu-column">
                      <Link
                        to="/projetos/direito"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Direito
                      </Link>
                      <Link
                        to="/projetos/ux"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        User Experience
                      </Link>
                    </div>

                    {/* Coluna 2 */}
                    <div className="megamenu-column">
                      <Link
                        to="/projetos/arquitetura"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Arquitetura
                      </Link>
                      <Link
                        to="/projetos/marketing"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Marketing
                      </Link>
                    </div>

                    {/* Coluna 3 */}
                    <div className="megamenu-column">
                      <Link
                        to="/projetos/front-end"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Front-end
                      </Link>
                      <Link
                        to="/projetos/ia"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Inteligência Artificial
                      </Link>
                    </div>

                    {/* Coluna 4 */}
                    <div className="megamenu-column">
                      <Link
                        to="/projetos/administracao"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Administração
                      </Link>
                      <Link
                        to="/projetos/back-end"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Back-end
                      </Link>
                    </div>

                    {/* Coluna 5 */}
                    <div className="megamenu-column">
                      <Link
                        // BUG CORRIGIDO AQUI
                        to="/projetos/economia"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Economia e Finanças
                      </Link>
                      <Link
                        to="/projetos/mobile"
                        onClick={() => setIsProjetosMenuOpen(false)}
                      >
                        Mobile
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== BOTÕES (APENAS MOBILE) ===== */}
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
              <Link
                to="/cadastro"
                className="btn btn--cadastre"
                onClick={closeMenu}
              >
                Cadastre-se
              </Link>
            </li>
          </ul>
        </nav>

        {/* ===== BOTÕES (APENAS DESKTOP) ===== */}
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

      {/* Overlay que fecha o menu mobile ao clicar fora */}
      {menuOpen && <div className="header__overlay" onClick={closeMenu} />}
    </header>
  );
}
