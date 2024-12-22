import { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from '../Data/projects.json'
import Hero from "../Components/Hero";
import './HomePage.css'

function HomePage() {
return (
  <>
  <Hero/>
<div className="projects-container">
  <div className="projectsort">
    <h2>My recent Projects</h2>
  </div>
  <div className="projects">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} className={`bg-${project.id}`} />
    ))
  }
  </div>
</div>
  </>

);

}

export default HomePage;
