import "./ProjectCard.css";

function ProjectCard({ project, className }) {
  return (
    <div className={`projectcard ${className}`}>
          <h3>{`${project.title}`}</h3>
          <p> {`${project.shortDescription}`}</p>
          <button className="primary-button">See project</button>
    </div>
  );
}

export default ProjectCard;
