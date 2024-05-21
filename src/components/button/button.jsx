import React from "react";
import "./button.css";

function Button() {
  const handleClick = () => {
    const phoneNumber = "5586981825254";
    const message = "Olá!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="button">
      <button onClick={handleClick} className="whatsapp-button">
        Contato
      </button>
    </div>
  );
}

export default Button;
