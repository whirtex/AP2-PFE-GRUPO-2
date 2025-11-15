import { useState } from "react";
import logo from "../assets/img/logo-Ibmec.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tik-tok.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openWho, setOpenWho] = useState(false);
  const [openProj, setOpenProj] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer__container">
        {/* coluna da marca */}
        <div className="footer__col footer__col--brand">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Logo Ibmec" />
          </Link>

          <p>
            Avenida Armando Lombardi, 949
            <br />
            Barra da Tijuca, Rio de Janeiro
          </p>
          <a href="#">Entre em contato conosco</a>
          <a href="#">Feedback do site</a>

          <div className="footer__social-links">
            <a
              href="https://x.com/Ibmec_oficial"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={tiktok} alt="TikTok" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* seção O Ibmec  */}
        <div
          className={`footer__col footer__section ${openWho ? "is-open" : ""}`}
        >
          <h3
            className="footer__col-title footer__toggle"
            aria-expanded={openWho}
            onClick={() => setOpenWho((v) => !v)}
          >
            O Ibmec
            <span className="footer__chevron" aria-hidden="true" />
          </h3>

          <ul className="footer__list footer__who-list">
            <li>
              <Link to="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <a href="#">Perguntas Frequentes</a>
            </li>
            <li>
              <a href="#">Responsabilidade social</a>
            </li>
            <li>
              <a href="#">Informações Acadêmicas</a>
            </li>
          </ul>
        </div>

        {/* ===== SEÇÃO PROJETOS (ATUALIZADA) ===== */}
        <div
          className={`footer__col footer__col--projects footer__section ${
            openProj ? "is-open" : ""
          }`}
        >
          <h3
            className="footer__col-title footer__toggle"
            aria-expanded={openProj}
            onClick={() => setOpenProj((v) => !v)}
          >
            Projetos
            <span className="footer__chevron" aria-hidden="true" />
          </h3>

          <ul className="footer__list footer__project-list">
            <li>
              <Link to="/projetos/direito">Direito</Link>
            </li>
            <li>
              <Link to="/projetos/back-end">Back-end</Link>
            </li>
            <li>
              <Link to="/projetos/ux">User Experience</Link>
            </li>
            <li>
              <Link to="/projetos/administracao">Administração</Link>
            </li>
            <li>
              <Link to="/projetos/arquitetura">Arquitetura</Link>
            </li>
            <li>
              <Link to="/projetos/ia">Inteligência Artificial</Link>
            </li>
            <li>
              <Link to="/projetos/marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/projetos/mobile">Mobile</Link>
            </li>
            <li>
              <Link to="/projetos/economia">Economia e Finanças</Link>
            </li>
            <li>
              <Link to="/projetos/front-end">Front-end</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom-bar">
        <div className="container bottom-bar__container">
          <p>© IBMEC - Todos os direitos reservados</p>

          <div className="bottom-bar__links">
            <a href="#">Política de privacidade</a>
            <a href="#">Código de Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
