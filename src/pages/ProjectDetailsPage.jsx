import { useParams } from "react-router-dom";
import projects from "../Data/projects.json";
import { NavLink } from "react-router-dom";
import "./ProjectDetailsPage.css";

function ProjectsDetailsPage() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-details">
      <img width={100} src={project.image} alt="project-image" />
      <h1>{project.title}</h1>
      <p>Technologies Used: {project.technologies}</p>

      <h2>Description</h2>
      <p> {project.longDescription}</p>
      <video poster={project.image} width={300} muted={true} src={project.video}></video>
      <button className="primary-button">
        See Github
        <a href={project.githubLink}></a>
      </button>
      <button>
        <a href={project.liveDemo}>Live Preview</a>
      </button>
      <NavLink to="/">
        <button>Back to Home</button>
      </NavLink>
    </div>
  );
}

export default ProjectsDetailsPage;
