import logo from "../assets/img/logo-ibmec.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tik-tok.svg";
import linkedin from "../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__container">
        <div className="footer__col footer__col--brand">
          <a href="/" className="header__logo">
            <img src={logo} alt="Logo Ibmec" />
          </a>
          <p>
            Avenida Armando Lombardi, 949
            <br />
            Barra da Tijuca, Rio de Janeiro
          </p>
          <a href="#">Entre em contato conosco</a>
          <a href="#">Feedback do site</a>
          <div className="footer__social-links">
            <a href="https://x.com/Ibmec_oficial">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={tiktok} alt="TikTok" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">O Ibmec</h3>
          <ul className="footer__who-list">
            <li>
              <a href="/quem-somos">Quem somos</a>
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

        <div className="footer__col footer__col--projects">
          <h3 className="footer__col-title">Projetos</h3>
          <ul className="footer__project-list">
            <li>
              <a href="#">Direito</a>
            </li>
            <li>
              <a href="#">Backend</a>
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
