import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "As aulas de pilates transformaram minha vida! Melhorei minha postura e reduzi minhas dores nas costas.",
      photo: "./public/photo1.png",
    },
    {
      name: "Carlos Souza",
      text: "O ambiente do estúdio é incrível e os instrutores são extremamente qualificados. Recomendo a todos!",
      photo: "./public/photo2.png",
    },
    {
      name: "Ana Paula",
      text: "Graças às sessões de pilates, recuperei minha mobilidade após uma lesão no joelho.",
      photo: "./public/photo3.png",
    },
    {
      name: "João Pedro",
      text: "Aula em grupo é muito divertida e motivadora. Sinto-me mais saudável e energizado!",
      photo: "./public/photo4.png",
    },
    {
      name: "Mariana Lima",
      text: "A abordagem personalizada dos instrutores faz toda a diferença. Me sinto muito bem cuidada aqui.",
      photo: "./public/photo5.png",
    },
    {
      name: "Fernanda Oliveira",
      text: "O estúdio é lindo e bem equipado. Sinto-me renovada após cada aula de pilates.",
      photo: "./public/photo6.png",
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
