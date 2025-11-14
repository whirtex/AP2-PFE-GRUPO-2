import "../styles/styleProjects.css";
import { Link } from "react-router-dom";

import Projeto1 from "../assets/img/img-projetos1.jpg";
import Projeto2 from "../assets/img/img-projetos2.jpg";
import Projeto3 from "../assets/img/img-projetos3.jpg";
import Projeto4 from "../assets/img/img-projetos4.jpg";
import Projeto5 from "../assets/img/img-projetos5.jpg";
import Projeto6 from "../assets/img/img-projetos6.jpg";

export default function ProjectsPage() {
  return (
    <>
      <main className="projects" aria-label="Vitrine de projetos">
        {/* Título */}
        <section className="projects__title">
          <h1>Projetos de Back-end</h1>
          <p>
            Trabalhos desenvolvidos por alunos do Ibmec em disciplinas de
            Engenharia e Tecnologia.
          </p>
        </section>

        {/* Grid de Cards */}
        <section className="projects__grid" aria-label="Lista de projetos">
          <article className="project-card">
            <h3 className="project-card__title">
              API de Gestão de Estoque em Tempo Real
            </h3>
            <p className="project-card__campus">Ibmec Barra, RJ</p>
            <img
              className="project-card__thumb"
              src={Projeto1}
              alt="Tela de código representando API de estoque"
            />
            <a href="#" className="project-card__btn" role="button">
              Ver Projeto
            </a>
          </article>

          <article className="project-card">
            <h3 className="project-card__title">
              Pipeline de Processamento de Dados para Analytics
            </h3>
            <p className="project-card__campus">Ibmec Centro, RJ</p>
            <img
              className="project-card__thumb"
              src={Projeto2}
              alt="Visual de dados e gráficos"
            />
            <a href="#" className="project-card__btn" role="button">
              Ver Projeto
            </a>
          </article>

          <article className="project-card">
            <h3 className="project-card__title">
              Microsserviço de Autenticação Centralizada
            </h3>
            <p className="project-card__campus">Ibmec Faria Lima, SP</p>
            <img
              className="project-card__thumb"
              src={Projeto3}
              alt="Fluxos de autenticação e segurança"
            />
            <a href="#" className="project-card__btn" role="button">
              Ver Projetos
            </a>
          </article>

          <article className="project-card">
            <h3 className="project-card__title">
              Sistema de Agendamento de Tarefas
            </h3>
            <p className="project-card__campus">Ibmec Paulista, SP</p>
            <img
              className="project-card__thumb"
              src={Projeto4}
              alt="Agenda e tarefas automatizadas"
            />

            <Link
              to="/projetos/backend/exemplo"
              className="project-card__btn"
              role="button"
            >
              Ver Projeto
            </Link>
          </article>

          <article className="project-card">
            <h3 className="project-card__title">API de Notificações</h3>
            <p className="project-card__campus">Ibmec Belo Horizonte, MG</p>
            <img
              className="project-card__thumb"
              src={Projeto5}
              alt="Agenda e tarefas automatizadas"
            />
            <a href="#" className="project-card__btn" role="button">
              Ver Projeto
            </a>
          </article>

          <article className="project-card">
            <h3 className="project-card__title">
              Gateway de Pagamentos Simplificado
            </h3>
            <p className="project-card__campus">Ibmec Brasília, DF</p>
            <img
              className="project-card__thumb"
              src={Projeto6}
              alt="Integração com provedores de pagamento"
            />
            <a href="#" className="project-card__btn" role="button">
              Ver Projeto
            </a>
          </article>
        </section>

        {/* Ver mais */}
        <div className="projects__more">
          <button className="projects__more-btn" type="button">
            Ver mais projetos
          </button>
        </div>
      </main>

      <hr className="linha-customizada" />
    </>
  );
}
