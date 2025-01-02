import { useState, useEffect } from "react";
import { useRef } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Data/projects.json";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="hero-section">
        <Hero />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
      <div id="projects-section">
          <h2>My recent Projects</h2>
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
        <div id="contact-section">
          <Contact />
        </div>
    </>
  );
}

export default HomePage;
