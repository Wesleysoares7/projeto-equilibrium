import "./servicesSection.css";

const Services = () => {
  return (
    <section id="services" className="service-section">
      <div className="service">
        <h2>Nossos Serviços</h2>
      </div>
      <div className="service-content">
        <div className="service-card">
          <img src="./assets/classico.png" alt="" />
          <div className="service-text">
            <h3>Pilates Clássico</h3>
            <p>
              Aprimore sua postura e força muscular com o método tradicional de
              Pilates.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/reabilitacao.png" alt="" />
          <div className="service-text">
            <h3>Pilates para Reabilitação</h3>
            <p>
              Sessões focadas em reabilitação de lesões e melhoria da
              mobilidade.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/grupo.png" alt="" />
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
