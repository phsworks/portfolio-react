import { useState, useEffect } from "react";
import { useRef } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Data/projects.json";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <Hero />
      </div>
      <div className="skills-section">
        <Skills />
      </div>
      <div id="projects-section">
        <div className="projectsort">
          <h2>My recent Projects</h2>
        </div>
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className={`bg-${project.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
