import "./AboutPage.css";
import diploma from "../assets/diploma.webp";
import { useState, useEffect } from "react";
import scrollUpArrow from "../assets/arrowUp.svg";
import { useTranslation } from "react-i18next";
import developer from "../assets/developer.webp"
import steve from "../assets/steve.webp"
import trendgigant from "../assets/trendgigant.webp"
import present from "../assets/present.webp"
import webdev from "../assets/webdev.webp"

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
      const timelineElement1 = document.querySelector(".timeline-1");
      const timelineElement2 = document.querySelector(".timeline-2");
      const timelineElement3 = document.querySelector(".timeline-3");
      const timelineElement4 = document.querySelector(".timeline-4");

      if (window.scrollY > 300) {
        setIsVisible(true);
        if (window.scrollY > 400) {
          timelineElement1.classList.add("timeline-animation");
          timelineElement2.classList.add("timeline-animation");
          timelineElement3.classList.add("timeline-animation-2");
          timelineElement4.classList.add("timeline-animation-2");

        }



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
        </div>
        <div className="about-picture">
          <img
            className="story-pictures"
            width={230}
            src={steve}
            alt="huis steve jobs"
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
          <div class="timeline-1">
            <div class="timeline-component timeline-content">
              <h3> {t("entrepeneurship")}</h3>
              <i>2021-2023</i>
              <p>{t("propaedeuticDiploma")}</p>
              <img
                className="story-pictures"
                width={120}
                src={diploma}
                alt="diploma"
                fetchPriority="high"
              />
            </div>
          </div>
          <div class="timeline-2">
            <div class="timeline-component timeline-content">
              <h3> {t("wordpress")}</h3>
              <i>2023-2024</i>
              <p>{t("trendGigant")}</p>
              <img
                className="story-pictures"
                width={120}
                src={trendgigant}
                alt="trendgigant"
                fetchPriority="high"
              />
              <p>{t("solvware")}</p>

              <img
                className="story-pictures"
                width={120}
                src={developer}
                alt="developer"
                fetchPriority="high"
              />
            </div>
          </div>

          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
            <div class="timeline-circle"></div>
          </div>
          <div class="timeline-3">
            <div class="timeline-component timeline-content">
              <h3> Web Development Bootcamp</h3>
              <i>2024</i>
              <p>{t("ironhack")}</p>
              <img
                className="story-pictures"
                width={120}
                src={webdev}
                alt="ironhack"
                fetchPriority="high"
              />
              <img
                className="story-pictures"
                width={120}
                src={present}
                alt="presentation ironhack"
                fetchPriority="high"
              />
            </div>
          </div>
          <div class="timeline-4">
            <div class="timeline-component timeline-content">
              <h3> {t("create")}</h3>
              <i>2025</i>
              <p>{t("creativeTech")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
