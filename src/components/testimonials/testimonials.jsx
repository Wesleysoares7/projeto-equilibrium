import "./testimonials.css";

import PhotoOne from "./images/photo1.png";
import PhotoTwo from "./images/photo2.png";
import PhotoThree from "./images/photo3.png";
import PhotoFour from "./images/photo4.png";
import PhotoFive from "./images/photo5.png";
import PhotoSix from "./images/photo6.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "As aulas de pilates transformaram minha vida! Melhorei minha postura e reduzi minhas dores nas costas.",
      photo: PhotoOne,
    },
    {
      name: "Carlos Souza",
      text: "O ambiente do estúdio é incrível e a instrutora é extremamente qualificada. Recomendo a todos!",
      photo: PhotoTwo,
    },
    {
      name: "Ana Paula",
      text: "Graças às sessões de pilates, recuperei minha mobilidade após uma lesão no joelho.",
      photo: PhotoThree,
    },
    {
      name: "João Pedro",
      text: "Aula em grupo é muito divertida e motivadora. Sinto-me mais saudável e energizado!",
      photo: PhotoFour,
    },
    {
      name: "Mariana Lima",
      text: "A abordagem personalizada da instrutora faz toda a diferença. Me sinto muito bem cuidada aqui.",
      photo: PhotoFive,
    },
    {
      name: "Fernanda Oliveira",
      text: "O estúdio é lindo e bem equipado. Sinto-me renovada após cada aula de pilates.",
      photo: PhotoSix,
    },
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="testimonials-title">
        <h2>Depoimentos</h2>
      </div>
      <div className="testimonials">
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}`}
                className="testimonial-photo"
              />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
