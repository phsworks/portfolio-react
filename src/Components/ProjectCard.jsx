import "./ProjectCard.css";
import { useNavigate, NavLink } from "react-router-dom";
import arrowRight from "../assets/ArrowRight.svg";
import { useTranslation } from "react-i18next";

function ProjectCard({ project, className }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;


  const shortDescription =
    project.translations && project.translations[currentLanguage]
      ? t(project.translations[currentLanguage].shortDescription)
      : "Description not available";

  const projectNavigate = () => {
    navigate(`/projectdetails/${project.id}`);
  };

  return (
    <div className={`projectcard ${className}`}>
      <div className="project-info">
        <div className="project-description">
          <h4 onClick={projectNavigate}>{project.title}</h4>
          <p>{shortDescription}</p>
        </div>
        <div className="project-link">
          <NavLink to={`/projectdetails/${project.id}`}>
            <img loading="lazy" src={arrowRight} alt="arrow-right" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
