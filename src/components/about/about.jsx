import Button from "../button/button";
import "./about.css";

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about">
        <h2>Sobre Nós</h2>
      </div>
      <div className=" about-welcome about-card card-one">
        <div className="about-welcome-text">
          <h3>
            Bem-vindo ao <strong>Instituto Equilibrium</strong>!
          </h3>
          <p>
            No <strong>Instituto Equilibrium</strong>, acreditamos que o Pilates
            é mais do que um exercício – é um caminho para uma vida equilibrada,
            saudável e harmoniosa. Nosso estúdio foi fundado com a missão de
            proporcionar um espaço acolhedor e inspirador onde cada indivíduo
            possa explorar e alcançar seu potencial máximo através do Pilates.
          </p>
        </div>
        <img src="./public/images/logo.png" alt="" />
      </div>
      <div className="about-philosophy about-card card-two">
        <img src="./public/images/filosofia.png" alt="" />
        <div className="about-philosophy-text">
          <h3>Nossa Filosofia</h3>
          <p>
            O Pilates é uma prática holística que fortalece o corpo, acalma a
            mente e nutre o espírito. No <strong>Instituto Equilibrium</strong>,
            seguimos os princípios originais de <strong>Joseph Pilates</strong>,
            combinando-os com abordagens modernas para atender às necessidades e
            objetivos de cada aluno. Acreditamos que o movimento consciente e o
            alinhamento correto são fundamentais para uma vida saudável e livre
            de dores.
          </p>
        </div>
      </div>
      <div className="about-instructor about-card card-one">
        <div className="about-instructor-text">
          <h3>Nossa Instrutora</h3>
          <p>
            Nossa instrutora, <strong>Jussara Lira</strong> é certificada e
            apaixonados pelo Pilates. Ela traz uma experiência única e um
            profundo entendimento do corpo humano, oferecendo aulas
            personalizadas e adaptadas às necessidades individuais. Está
            comprometida em criar um ambiente seguro e motivador, onde todos se
            sintam bem-vindos e encorajados a crescer.
          </p>
        </div>
        <img src="./public/images/hero2.png" alt="" />
      </div>
      <div className="about-card card-two about-services">
        <img src="./public/images/about1.png" alt="" />
        <div className="about-services-text">
          <h3>O que Oferecemos</h3>
          <p>Aulas de Pilates em Aparelhos</p>
          <p>Pilates Mat</p>
          <p>Pilates para Grávidas</p>
          <p>Pilates Terapêutico</p>
          <p>Aulas em Grupo e Individuais</p>
        </div>
      </div>
      <div className="about-card card-one about-space">
        <div className="about-space-text">
          <h3>Nosso Espaço</h3>
          <p>
            Localizado no bairro <strong>Morada Nova</strong>, em Teresina-PI,
            nosso estúdio foi projetado para ser um refúgio tranquilo no meio da
            cidade. Com equipamentos modernos e um ambiente sereno,
            proporcionamos o espaço perfeito para desconectar do estresse diário
            e conectar-se com seu corpo e mente.
          </p>
        </div>
        <img src="./public/images/espaco.png" alt="" />
      </div>
      <div className="about-card card-two about-location">
        <img src="./public/images/localizacao.png" alt="" />
        <div className="about-location-text">
          <h3>Venha nos Conhecer</h3>
          <p>
            Se você está procurando melhorar sua força, flexibilidade, postura
            ou simplesmente encontrar um momento de paz no seu dia, o{" "}
            <strong>Instituto Equilibrium</strong> é o lugar ideal para você.
            Oferecemos aulas experimentais para novos alunos – venha nos visitar
            e descubra os benefícios transformadores do Pilates.
          </p>
          <div className="location-button">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
