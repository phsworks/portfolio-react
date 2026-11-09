import "./ProjectCard.css";
import { NavLink } from "react-router-dom";
import arrowRight from "../assets/ArrowRight.svg";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
  const { i18n } = useTranslation();
  const tr = project.translations[i18n.resolvedLanguage] || project.translations.nl;

  return (
    <NavLink to={`/projectdetails/${project.id}`} className="projectcard-wrapper">
      <div className={`projectcard bg-${project.id}`}></div>
      <div className="project-text">
        <h4>
          {project.title}
          <img loading="lazy" src={arrowRight} alt="" />
        </h4>
        <p>{tr.shortDescription}</p>
        <ul className="project-tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
