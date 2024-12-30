import React from "react";
import "./Hero.css";
import Piet from '../assets/Piet-Hein.png'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <h2> I am Piet-Hein,</h2>
        <h1>
          Passionate Full-Stack <span>Web Developer</span>{" "}
        </h1>
        <img width={290} src={Piet} alt="piet-hein" />
        <p>
          “With a passion for building websites and full-stack applications, I
          combine creativity, problem-solving, and a results-driven approach to
          bring ideas to life.”
        </p>
        <div className="info-buttons">
          <button className="secondary-button">
            Download CV
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="12"
                viewBox="0 0 20 22"
              >
                <path
                  fill="#02609a"
                  d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1M5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1"
                />
              </svg>
            </span>
          </button>
          <button className="primary-button">My Projects</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
