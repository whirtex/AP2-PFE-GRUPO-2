import { useState } from "react";
import logo from "../assets/img/logo-ibmec.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tik-tok.svg";
import linkedin from "../assets/icons/linkedin.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  // controla os “acordeons” no mobile
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

        {/* seção O Ibmec (acordeon no mobile) */}
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

        {/* seção Projetos (acordeon no mobile) */}
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
              <a href="#">Direito</a>
            </li>
            <li>
              <Link to="/projetos/backend">Backend</Link>
            </li>
            <li>
              <a href="#">Frontend</a>
            </li>
            <li>
              <a href="#">Inteligência Artificial</a>
            </li>
            <li>
              <a href="#">Arquitetura</a>
            </li>
            <li>
              <a href="#">Administração</a>
            </li>
            <li>
              <a href="#">Ecomomia e Finanças</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">User Experience</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom-bar">
        <div className="container bottom-bar__container">
          <p>© IBMEC - Todos os direitos reservados</p>
          <nav>
            <a href="#">Política de privacidade</a>
            <a href="#">Código de Ética</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
