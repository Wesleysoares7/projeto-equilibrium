import Button from "../button/button";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <img
          src="./dist/assets/hero.jpg"
          alt="imagem de tres pessoas fazendo exercicio de pilates"
        />
        <div className="hero-text">
          <h1>Instituto Equilibrium</h1>
          <h3>Estudio de Pilates</h3>
          <p>
            Conheça os beneficios da prática do Pilates para o seu dia a dia!
          </p>
          <div className="hero-button">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
