import "./ProjectCard.css";
import { NavLink } from "react-router-dom";
import arrowRight from "../assets/arrow-right.png";

function ProjectCard({ project, className }) {


  return (
    <div className={`projectcard ${className}`}>
      <div className="project-info">
        <div className="project-description">
          <h4>{`${project.title}`}</h4>
          <p> {`${project.shortDescription}`}</p>
        </div>
        <div className="project-link">
          <NavLink to={`/projectdetails/${project.id}`}>
            <img src={arrowRight} alt="arrow-right" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
