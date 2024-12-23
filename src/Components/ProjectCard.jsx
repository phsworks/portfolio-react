import "./ProjectCard.css";
import { NavLink } from "react-router-dom";

function ProjectCard({ project, className }) {
  return (
    <div className={`projectcard ${className}`}>
      <h3>{`${project.title}`}</h3>
      <p> {`${project.shortDescription}`}</p>
      <NavLink to={`/projectdetails/${project.id}`}>
        <button className="primary-button">See project</button>
      </NavLink>
    </div>
  );
}

export default ProjectCard;
