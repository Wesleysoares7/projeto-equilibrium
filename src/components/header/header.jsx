import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section>
      <header className="interface">
        <nav>
          <div>
            <img src="./public/images/logo.png" alt="Logo" />
          </div>
          <div
            ref={toggleRef}
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul ref={menuRef} className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#Hero">Home</a>
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