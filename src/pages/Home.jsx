import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import icDireito from "../assets/icons/direito.svg";
import icArquitetura from "../assets/icons/arquitetura.svg";
import icIA from "../assets/icons/IA.svg";
import icAdm from "../assets/icons/marketing e vendas.svg";
import icEcon from "../assets/icons/economia e financas.svg";
import icUX from "../assets/icons/UX.svg";
import icMkt from "../assets/icons/marketing.svg";
import icFront from "../assets/icons/front.svg";
import icBack from "../assets/icons/back.svg";
import icMobile from "../assets/icons/mobile.svg";

import MarkZ from "../assets/img/MarkZuckerberg.png";
import TimC from "../assets/img/TimCook.png";
import AndyJ from "../assets/img/AndyJassy.png";
import SatyaN from "../assets/img/SatyaNadella.png";
import JoaoA from "../assets/img/JoaoAdibe.png";
import DiegoB from "../assets/img/DiegoBarreto.png";

export default function Home() {
  const location = useLocation();

  // Se veio de outra página com { state: { scrollTo: "projetos" | "depoimentos" } }
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [location.state]);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h2>
            O Futuro se Cria Aqui.
            <br />
            Encontre talentos e soluções no Ibmec.
          </h2>

          <div className="search-box">
            <input type="text" placeholder="Buscar projetos" />
            <button>Pesquisar</button>
          </div>

          <p className="popular">Pesquisas populares</p>
          <div className="tags">
            <span> Consultor de negócios</span>
            <span> Aplicativo para pets</span>
            <span> IA e Dados </span>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="projetos" id="projetos">
        <div className="container">
          <h3>Explore nossos projetos</h3>
          <div className="grid-projetos">
            <div className="card">
              <img src={icDireito} alt="Direito" />
              <h4>Direito</h4>
            </div>
            <div className="card">
              <img src={icArquitetura} alt="Arquitetura" />
              <h4>Arquitetura</h4>
            </div>
            <div className="card">
              <img src={icIA} alt="Inteligência Artificial" />
              <h4>
                Inteligência
                <br />
                Artificial
              </h4>
            </div>
            <div className="card">
              <img src={icAdm} alt="Administração" />
              <h4>Administração</h4>
            </div>
            <div className="card">
              <img src={icEcon} alt="Economia e Finanças" />
              <h4>
                Economia
                <br />e Finanças
              </h4>
            </div>
            <div className="card">
              <img src={icUX} alt="User Experience" />
              <h4>
                User
                <br />
                Experience
              </h4>
            </div>
            <div className="card">
              <img src={icMkt} alt="Marketing" />
              <h4>Marketing</h4>
            </div>
            <div className="card">
              <img src={icFront} alt="Front-end" />
              <h4>Front-end</h4>
            </div>
            <Link to="/projetos/backend" className="card">
              <img src={icBack} alt="Back-end" />
              <h4>Back-end</h4>
            </Link>
            <div className="card">
              <img src={icMobile} alt="Mobile" />
              <h4>Mobile</h4>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos" id="depoimentos">
        <div className="container">
          <h3>Resultados reais dos nosso clientes</h3>

          <div className="grid-depoimentos">
            <div className="depo-card">
              <div className="title-row">
                <img src={icArquitetura} alt="Arquitetura e UX" />
                <h4>Arquitetura e UX</h4>
              </div>
              <p>
                "É raro ver um time tão jovem dominar a intersecção entre
                arquitetura e experiência. O conceito que eles apresentaram para
                nossos novos espaços de varejo é a prova de que o futuro do
                design está em boas mãos."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={TimC} alt="autor" />
                <div>
                  <strong>Tim Cook</strong>
                  <br />
                  <small>
                    CEO Apple
                    <br />
                    15 de fev de 2025
                  </small>
                </div>
              </div>
            </div>

            <div className="depo-card">
              <div className="title-row">
                <img src={icBack} alt="Back-End" />
                <h4>Back-End</h4>
              </div>
              <p>
                "A arquitetura de backend que esta equipe projetou para nós é
                uma verdadeira obra de engenharia de software. Eles demonstraram
                um domínio de escalabilidade e performance digno de nossos
                melhores engenheiros."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={AndyJ} alt="autor" />
                <div>
                  <strong>Andy Jassy</strong>
                  <br />
                  <small>
                    CEO Amazon
                    <br />
                    15 de set de 2025
                  </small>
                </div>
              </div>
            </div>

            <div className="depo-card">
              <div className="title-row">
                <img src={icFront} alt="Front-End" />
                <h4>Front-End</h4>
              </div>
              <p>
                "Demos a eles um desafio de interface com dados extremamente
                complexos. A solução que entregaram não foi apenas funcional,
                mas de uma clareza e elegância que elevaram o padrão do que
                considerávamos possível."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={SatyaN} alt="autor" />
                <div>
                  <strong>Satya Nadella</strong>
                  <br />
                  <small>
                    CEO Microsoft
                    <br />
                    19 de ago de 2025
                  </small>
                </div>
              </div>
            </div>

            <div className="depo-card">
              <div className="title-row">
                <img src={icIA} alt="Serviços de IA" />
                <h4>Serviços de IA</h4>
              </div>
              <p>
                "A profundidade da equipe de IA é impressionante. Eles
                desenvolveram uma solução preditiva que redefiniu nossa
                abordagem de engajamento em escala global."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={MarkZ} alt="autor" />
                <div>
                  <strong>Mark Zuckerberg</strong>
                  <br />
                  <small>
                    CEO Meta
                    <br />5 de fev de 2025
                  </small>
                </div>
              </div>
            </div>

            <div className="depo-card">
              <div className="title-row">
                <img src={icEcon} alt="Economia e Marketing" />
                <h4>Economia e Marketing</h4>
              </div>
              <p>
                "A análise de mercado que recebemos foi de um nível de
                senioridade impressionante. São talentos com uma visão
                estratégica do consumidor brasileiro que muitas agências
                experientes não possuem."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={JoaoA} alt="autor" />
                <div>
                  <strong>João Adibe</strong>
                  <br />
                  <small>
                    CEO Cimed
                    <br />
                    30 de mar de 2025
                  </small>
                </div>
              </div>
            </div>

            <div className="depo-card">
              <div className="title-row">
                <img src={icDireito} alt="Direito" />
                <h4>Direito</h4>
              </div>
              <p>
                "Navegar no cenário regulatório brasileiro é um desafio
                constante. A consultoria jurídica deste time nos forneceu
                insights claros e a segurança necessária para avançar com um de
                nossos projetos mais inovadores."
              </p>
              <div className="rating">★★★★★</div>
              <div className="autor">
                <img src={DiegoB} alt="autor" />
                <div>
                  <strong>Diego Barreto</strong>
                  <br />
                  <small>
                    CEO iFood
                    <br />
                    12 de jan de 2025
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
