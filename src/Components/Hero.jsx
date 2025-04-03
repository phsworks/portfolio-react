import React from "react";
import "./Hero.css";
import Piet from "../assets/Piet-Hein.webp";
import { NavLink } from "react-router-dom";
import github from "../assets/GithubLogo.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import youtube from "../assets/youtube.webp";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const cvDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1DdbMYJzJrp9-oKNaIOs0-F1HxXy5LX6S/view?usp=drive_link";
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="personal-info">
          <div>
            <h3 className="iam">{t("iamPietHein")}</h3>
            <h1>
              Full-Stack <br></br> Developer
            </h1>
          </div>

          <img
            className="image-mobile"
            width={290}
            src={Piet}
            alt="piet-hein"
            fetchPriority="high"
          />
          <p>{t("personalStatement")}</p>
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
                      fill="#0072ba"
                      d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1M5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1"
                    />
                  </svg>
                </span>
              </button>
              <button className="primary-button">
                <NavLink onClick={scrollUp} to="/aboutme">
                  {t("About")}
                </NavLink>
              </button>
            </div>
            <div className="social-icons">
              <a href="https://github.com/phsworks?tab=repositories">
                <img src={github} alt="github-logo" />
              </a>
              <a href="https://www.youtube.com/channel/UCEIjn71x-ahkmjvUxYURz-w">
                <img src={youtube} alt="youtube-logo" />
              </a>
              <a href="https://www.instagram.com/phsdevelopment/">
                <img src={instagram} alt="instagram-logo" />
              </a>
              <a href="https://www.linkedin.com/in/piethein-schouten/">
                <img src={linkedin} alt="linkedin-logo" />
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
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
