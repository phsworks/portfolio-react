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
      <p>{project.longDescription}</p>
    </div>
  );
}

export default ProjectsDetailPage;
