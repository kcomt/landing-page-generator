// components/Header.jsx
import React from "react";
import "./header.css";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Brand Logo" className="logo" />
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
