import React from "react";
import "../assets/css/menudesple.css";

const BurguerButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`icon nav-icon-5 ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurguerButton;