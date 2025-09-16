import "./AboutPage.css";
import diploma from "../assets/diploma.webp";
import { useState, useEffect } from "react";
import scrollUpArrow from "../assets/arrowUp.svg";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div id="about-section">
      {isVisible && (
        <div className="scroll-up">
          <button onClick={scrollUp}>
            <img src={scrollUpArrow} alt="scroll-up-icon" />
          </button>
        </div>
      )}
      <div className="about-intro">
        <div className="about-info">
          <h1>{t("About")}</h1>
          <h4>{t("iam")}</h4>
          <p>{t("mywholelife")}</p>
          <br></br>
          <p>{t("interestedin")}</p>
        </div>
        <div className="about-picture">
          <img
            width={230}
            src={diploma}
            alt="piet-diploma"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="my-story">
        <h2>{t("experience")}</h2>
        <article>
          <h3>{t("entrepeneurship")}</h3>
          <p>{t("propaedeuticDiploma")}</p>
          <p>{t("internshipExperience")}</p>
        </article>
        <article>
          <h3>{t("wordpress")}</h3>
          <p>{t("trendGigant")}</p>
          <p>{t("solvware")}</p>
        </article>
        <article>
          <h3> Web Development Bootcamp</h3>
          <p>{t("ironhack")}</p>
        </article>
        <article>
          <h3>{t("create")}</h3>
          <p>{t("creativeTech")}</p>
          <p>{t("future")}</p>
        </article>
      </div>
    </div>
  );
}

export default AboutPage;
