import { useParams } from "react-router-dom";
import projects from "../Data/projects.json";

function ProjectsDetailPage() {
  const { id } = useParams();
  const project = projects.find(project => project.id === Number(id))

  if (!project) {
    return <p>Project not found</p>
  }


  return (
    <div>
      <h1>{project.title}</h1>
      <p>Technologies: {project.technologies}</p>

      <h2>Description</h2>
      <p> {project.longDescription}</p>
      <video src={project.video}></video>
    </div>
  );
}

export default ProjectsDetailPage;
