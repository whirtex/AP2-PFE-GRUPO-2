import "../styles/styleProjects.css";
import { Link } from "react-router-dom";

import imagemExemplo from "../assets/img/imagemExemplo.png";

export default function ProjectsPage() {
  return (
    <>
      <main className="projects" aria-label="Vitrine de projetos">
        {/* Título */}
        <section className="projects__title">
          <h1>Projetos Exemplo</h1>
          <p>Trabalhos desenvolvidos por alunos do Ibmec</p>
        </section>

        {/* Grid de Cards */}
        <section className="projects__grid" aria-label="Lista de projetos">
          <article className="project-card">
            <h3 className="project-card__title">Exemplo 1</h3>
            <p className="project-card__campus">Ibmec Barra, RJ</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
              alt="Tela de código representando API de estoque"
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
            <h3 className="project-card__title">Exemplo 2</h3>
            <p className="project-card__campus">Ibmec Centro, RJ</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
              alt="Visual de dados e gráficos"
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
            <h3 className="project-card__title">Exemplo 3</h3>
            <p className="project-card__campus">Ibmec Faria Lima, SP</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
              alt="Fluxos de autenticação e segurança"
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
            <h3 className="project-card__title">Exemplo 4</h3>
            <p className="project-card__campus">Ibmec Paulista, SP</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
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
            <h3 className="project-card__title">Exemplo 5</h3>
            <p className="project-card__campus">Ibmec Belo Horizonte, MG</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
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
            <h3 className="project-card__title">Exemplo 6</h3>
            <p className="project-card__campus">Ibmec Brasília, DF</p>
            <img
              className="project-card__thumb"
              src={imagemExemplo}
              alt="Integração com provedores de pagamento"
            />
            <Link
              to="/projetos/backend/exemplo"
              className="project-card__btn"
              role="button"
            >
              Ver Projeto
            </Link>
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
