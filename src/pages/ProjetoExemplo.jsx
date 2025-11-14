import "../styles/styleProjetoExemplo.css";
import "../styles/style.css";

import Projeto4 from "../assets/img/img-projetos4.jpg";

export default function ProjetoExemplo() {
  return (
    <>
      {/* MAIN */}
      <main className="main-content">
        <section className="project-container">
          <div className="project-info">
            <h1>Sistema de Agendamento de Tarefas</h1>

            <article>
              <h2>Descrição do Projeto:</h2>
              <p>
                Este projeto consiste em um robusto microsserviço de backend,
                projetado para orquestrar e automatizar processos de negócio que
                precisam ser executados de forma recorrente. Através de uma API
                RESTful segura, o sistema permite que outras aplicações
                registrem "jobs" (tarefas) de forma programática, definindo
                schedules de execução com alta flexibilidade por meio de
                expressões cron. Uma vez agendada, cada tarefa entra em uma fila
                de processamento que garante sua execução de forma confiável e
                na ordem correta, mesmo em caso de falhas ou reinicializações do
                sistema. A arquitetura oferece visibilidade completa sobre o
                ciclo de vida de cada job, com status de sucesso ou falha e logs
                detalhados, sendo a solução ideal para automatizar rotinas
                críticas como o envio de relatórios diários, a sincronização
                noturna de bancos de dados e backups programados, aumentando
                drasticamente a eficiência operacional e reduzindo a necessidade
                de intervenção manual.
              </p>
            </article>

            {/* Informações em cards */}
            <aside className="info-cards">
              <div className="item-relacionado">
                <h3>Membros</h3>
                <p>
                  <i className="fa-solid fa-users" aria-hidden="true" /> 5
                  pessoas
                </p>
              </div>

              <div className="item-relacionado">
                <h3>Tecnologias</h3>
                <p>
                  <i className="fa-solid fa-microchip" aria-hidden="true" />{" "}
                  Node JS, TypeScript, Redis, PostgreSQL, Docker
                </p>
              </div>

              <div className="item-relacionado">
                <h3>Localização</h3>
                <p>
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />{" "}
                  São Paulo, SP
                </p>
              </div>

              <div className="item-relacionado">
                <h3>Serviços Prestados</h3>
                <p>
                  <i className="fa-solid fa-robot" aria-hidden="true" />{" "}
                  Arquitetura de Backend, Desenvolvimento de API, Automação de
                  Processos.
                </p>
              </div>
            </aside>

            <div className="project-actions">
              <a className="btn btn--primary" target="_blank">
                GitHub
              </a>
              <a href="#contato" className="btn btn--secondary">
                Contatar equipe
              </a>
            </div>
          </div>

          <figure>
            <img src={Projeto4} alt="Preview do sistema de agendamento" />
          </figure>
        </section>
      </main>

      <hr className="linha-customizada" />
    </>
  );
}
