import ProjectCard from "../Components/ProjectCard";
import projects from "../Data/projects.json";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import { useEffect, useState } from "react";
import scrollUpArrow from "../assets/arrowUp.svg"
import "./HomePage.css";
import { useTranslation } from "react-i18next";


function HomePage() {
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
    <>
      <div className="hero-section">
        <Hero />
      </div>
      {isVisible && (
        <div className="scroll-up">
          <button onClick={scrollUp}>
            <img loading="lazy" src={scrollUpArrow} alt="scroll-up-icon" />
          </button>k
        </div>
      )}
      <div id="projects-section">
        <h2>{t("projects")}</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className={`bg-${project.id}`}
            />
          ))}
        </div>
      </div>
      <div id="skills-section">
        <Skills />
      </div>

      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
