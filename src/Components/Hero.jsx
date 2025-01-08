import React from "react";
import "./Hero.css";
import Piet from "../assets/Piet-Hein.png";
import { NavLink } from "react-router-dom";
import github from "../assets/GithubLogo.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

function Hero() {
  const cvDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1GgkVkFqLvX6lxUdtQuH_Pb7yZYIFtlQj/view?usp=drive_link";
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="personal-info">
          <h3> I am Piet-Hein,</h3>
          <h1>
            Passionate Full-Stack <br></br>
            <span>Web Developer</span>{" "}
          </h1>

          <img
            className="image-mobile"
            width={290}
            src={Piet}
            alt="piet-hein"
          />
          <p>
            “With a passion for building websites and full-stack applications, I
            combine creativity, problem-solving, and a results-driven approach
            to bring ideas to life.”
          </p>
          <div className="connect-section">
            <div className="info-buttons">
              <button onClick={cvDownload} className="secondary-button">
                Download CV
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="13"
                    viewBox="0 0 20 22"
                  >
                    <path
                      fill="#02609a"
                      d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1M5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1"
                    />
                  </svg>
                </span>
              </button>
              <button className="primary-button">
                <NavLink to="/aboutme"> About Me</NavLink>
              </button>
            </div>
            <div className="social-icons">
              <a href="https://github.com/phsworks?tab=repositories">
                <img width={30} src={github} alt="github-logo" />
              </a>
              <a href="https://www.youtube.com/channel/UCEIjn71x-ahkmjvUxYURz-w">
                <img width={30} src={youtube} alt="youtube-logo" />
              </a>
              <a href="https://www.instagram.com/phsdevelopment/">
                <img width={30} src={instagram} alt="instagram-logo" />
              </a>
              <a href="https://www.linkedin.com/in/piethein-schouten/">
                <img width={30} src={linkedin} alt="linkedin-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="personal-picture">
          <img
            className="image-tablet"
            width={330}
            src={Piet}
            alt="piet-hein"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
