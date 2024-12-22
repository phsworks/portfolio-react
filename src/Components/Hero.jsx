import React from "react";
import "./Hero.css";
import Piet from '../assets/Piet-Hein.png'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <h2> I am Piet-Hein,</h2>
        <h1>Full-Stack Web Developer</h1>
        <img width={300} src={Piet} alt="piet-hein" />
        <p>
          “With a passion for building websites and full-stack
          applications, I combine creativity, problem-solving, and a
          results-driven approach to bring ideas to life.”
        </p>
        <button>Download CV</button>
        <button>My Projects</button>
      </div>
    </div>
  );
}

export default Hero;
