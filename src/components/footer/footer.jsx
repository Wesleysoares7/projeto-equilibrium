// src/components/Footer.js
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer id="contato" className="footer">
      <div className="footer-content">
        <div className="footer-logo">Instituto Equilibrium</div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="footer-contact">
          <p>Email: contato@institutoequilibrium.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Instituto Equilibrium. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
