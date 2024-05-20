import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <header className="interface">
        <nav>
          <div>
            <img src="./public/images/logo.png" alt="Logo" />
          </div>
          <div
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Serviço">Serviços</a>
            </li>
            <li>
              <a href="#Depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
