import "./AboutPage.css";
import diploma from "../assets/diploma.webp";
import { useState, useEffect } from "react";
import scrollUpArrow from "../assets/arrowUp.svg";
import { useTranslation } from "react-i18next";
import timeline from "../assets/Timeline.webp"

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
            className="diploma"
            width={230}
            src={diploma}
            alt="piet-diploma"
            fetchPriority="high"
          />
        </div>
      </div>

      <section class="experience-section">
        <h2>{t("experience")}</h2>
        <div class="timeline">
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
            <h3> {t("entrepeneurship")}</h3>
            <i>2021-2023</i>
            <p>{t("propaedeuticDiploma")}</p>
          </div>
          <div class="timeline-component timeline-content">
            <h3> {t("wordpress")}</h3>
            <i>2023-2024</i>
            <p>{t("trendGigant")}</p>
            <p>{t("solvware")}</p>
          </div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-component timeline-content">
            <h3> Web Development Bootcamp</h3>
            <i>2024</i>
            <p>{t("ironhack")}</p>
          </div>

          <div class="timeline-component timeline-content">
            <h3> {t("create")}</h3>
            <i>2025</i>
            <p>{t("creativeTech")}</p>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
