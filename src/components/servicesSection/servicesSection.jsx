import "./servicesSection.css";

import ClassicoImg from "./images/classico.png";
import ReabilitacaoImg from "./images/reabilitacao.png";
import GrupoImg from "./images/grupo.png";

const Services = () => {
  return (
    <section id="services" className="service-section">
      <div className="service">
        <h2>Nossos Serviços</h2>
      </div>
      <div className="service-content">
        <div className="service-card">
          <img src={ClassicoImg} alt="mulher praticando pilaes" />
          <div className="service-text">
            <h3>Pilates Clássico</h3>
            <p>
              Aprimore sua postura e força muscular com o método tradicional de
              Pilates.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img
            src={ReabilitacaoImg}
            alt="mulher idosa com instrutor praticando pilates"
          />
          <div className="service-text">
            <h3>Pilates para Reabilitação</h3>
            <p>
              Sessões focadas em reabilitação de lesões e melhoria da
              mobilidade.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img
            src={GrupoImg}
            alt="mulher fazendo o mesmo exercicio de pilates"
          />
          <div className="service-text">
            <h3>Aulas em Grupo</h3>
            <p>
              Desfrute de aulas dinâmicas em grupo, promovendo o bem-estar e a
              socialização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
