import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <section className="hero">
      <h1 className="hero-title">{props.text["hero-title"]}</h1>
      <p className="hero-subtitle">{props.text["hero-message"]}</p>
    </section>
  );
};

export default Hero;
