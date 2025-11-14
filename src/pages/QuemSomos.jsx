// src/pages/QuemSomos.jsx
import "../styles/styleQuemSomos.css";
import ibmecVideo from "../assets/img/ibmec.mp4";
import equipeImg from "../assets/img/quem-somos-img.png";

export default function QuemSomos() {
  return (
    <main id="quem-somos" aria-label="Seção Quem Somos">
      <section className="qs-container">
        {/* Texto principal */}
        <div className="qs-principal">
          <h2>A Força do Ibmec por Trás do Projeto</h2>
          <p>
            Por trás de cada projeto que você vê aqui, existe uma base de mais
            de meio século de vanguarda e excelência. O Ibmec nasceu com o DNA
            do pioneirismo — fomos a primeira instituição no país a criar um MBA
            em Finanças e, desde então, nunca paramos de evoluir.
          </p>
          <p>
            Essa tradição de inovação, validada pelas mais altas avaliações do
            MEC, nos permite formar talentos que não apenas respondem às
            demandas do presente, mas que estão efetivamente preparados para
            criar o futuro. É essa força institucional que dá credibilidade e
            impulsiona cada solução que esta plataforma apresenta.
          </p>
        </div>

        {/* Imagem */}
        <div className="qs-imagem">
          <img src={equipeImg} alt="Equipe trabalhando em projeto" />
        </div>

        {/* Texto secundário */}
        <div className="qs-secundario">
          <h3>O Projeto: A Ponte para o Futuro</h3>
          <p>
            “Com esta base de excelência e mais de 50 anos de história, nasce
            esta plataforma. Ela é o portfólio digital da inovação do Ibmec,
            criada com um propósito claro: valorizar o trabalho extraordinário
            de nossos estudantes e criar uma ponte real com os desafios do
            mercado.”
          </p>
          <p>
            Acreditamos que as grandes ideias desenvolvidas em sala de aula não
            devem ficar no papel, e aqui conectamos empresas a soluções
            criativas e aos talentos que irão liderar o futuro.”
          </p>
        </div>

        {/* Vídeo */}
        <div className="qs-video">
          <video
            src={ibmecVideo}
            controls
            title="Depoimento Ibmec"
            preload="metadata"
          />
        </div>
      </section>
    </main>
  );
}
//teste
