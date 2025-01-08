import "./ProjectCard.css";
import { useNavigate, NavLink } from "react-router-dom";
import arrowRight from "../assets/ArrowRight.svg";

function ProjectCard({ project, className }) {
  const navigate = useNavigate();

  const projectNavigate = () => {
    navigate(`/projectdetails/${project.id}`);
  }

  return (
    <div className={`projectcard ${className}`}>
      <div className="project-info">
        <div className="project-description">
          <h4 onClick={projectNavigate}>{`${project.title}`}</h4>
          <p onClick={projectNavigate}> {`${project.shortDescription}`}</p>
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
