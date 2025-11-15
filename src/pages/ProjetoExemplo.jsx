import "../styles/styleProjetoExemplo.css";
import "../styles/style.css";

import imagemExemplo from "../assets/img/imagemExemplo.png";

export default function ProjetoExemplo() {
  return (
    <>
      {/* MAIN */}
      <main className="main-content">
        <section className="project-container">
          <div className="project-info">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>

            <article>
              <h2>Descrição do Projeto:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sagittis cursus consequat. Vestibulum commodo semper
                arcu aliquet luctus. Quisque volutpat id orci ac porttitor. Cras
                varius ornare arcu, id aliquet tellus ornare id. Nam rhoncus
                consectetur mi, sit amet tincidunt tortor interdum vitae. Etiam
                porttitor ante quam, semper viverra metus cursus eget. Aliquam
                erat volutpat. Nulla lectus quam, scelerisque eget lobortis
                eget, consequat ac magna. Proin ultrices ullamcorper magna eget
                porttitor. Maecenas tortor purus, elementum at pretium vitae,
                rhoncus eget augue. Phasellus sollicitudin lacinia nisl. Nulla
                vitae urna ut lacus consectetur pellentesque vitae sed turpis.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Vestibulum convallis quis ipsum ac hendrerit. Maecenas diam
                tortor, maximus eget pellentesque sed, lacinia placerat dolor.
                Nullam vitae dignissim odio. Cras porta nisi eu pellentesque
                sollicitudin. Aenean eget rhoncus nunc. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Etiam hendrerit, leo ac consectetur vulputate, odio
                ligula condimentum nisi, vel ullamcorper ante purus non eros.
                Sed vehicula vel erat nec fermentum. Aenean et mauris quis nisl
                sagittis convallis eu non ligula. Duis tincidunt sem vel nisi
                euismod tempor. Pellentesque eu sodales dolor. Mauris accumsan
                egestas neque a rutrum. Nullam suscipit erat.
              </p>
            </article>

            {/* Informações em cards */}
            <aside className="info-cards">
              <div className="item-relacionado">
                <h3>Membros</h3>
                <p>
                  <i className="fa-solid fa-users" aria-hidden="true" /> ##
                  pessoas
                </p>
              </div>

              <div className="item-relacionado">
                <h3>Tecnologias</h3>
                <p>
                  <i className="fa-solid fa-microchip" aria-hidden="true" />{" "}
                  Tec1, Tec2, Tec3, Tec4, ...
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
                  <i className="fa-solid fa-robot" aria-hidden="true" /> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  porttitor dolor nec lacus.
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
            <img src={imagemExemplo} alt="Preview do sistema de agendamento" />
          </figure>
        </section>
      </main>

      <hr className="linha-customizada" />
    </>
  );
}
