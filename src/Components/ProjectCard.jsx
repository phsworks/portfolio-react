import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

function ProjectCard({ project, className }) {
  return (
    <div className={`projectcard ${className}`}>
      <h3>{`${project.title}`}</h3>
      <p> {`${project.shortDescription}`}</p>

      <button className="primary-button">
        <NavLink to={`/projectdetails/${project.id}`}>See project</NavLink>
      </button>
    </div>
  );
}

export default ProjectCard;
