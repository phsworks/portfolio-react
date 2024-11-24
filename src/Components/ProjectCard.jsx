import './ProjectCard.css'



function ProjectCard({project, className}) {
  return (
    <div className={`projectcard ${className}`}>
      <h3>{`${project.title}`}</h3>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default ProjectCard;
