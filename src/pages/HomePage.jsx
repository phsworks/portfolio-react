import { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from '../Data/projects.json'
import './HomePage.css'

function HomePage() {
return (
  <>




<div className="projects-container">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} className={`bg-img-${(index % 4) + 1}`} />
    ))
  }


</div>
  </>

);

}

export default HomePage;
