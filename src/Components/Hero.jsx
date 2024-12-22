import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="outer">
        <div className="dot"></div>
        <div className="inner">
          <h2> I am Piet-Hein,</h2>
          <h1>Full-Stack Web Developer</h1>
          <p>
            I’ve always been fascinated by how technology can shape our world.
            From building websites to developing full-stack applications, I
            bring creativity, problem-solving, and a results-oriented mindset to
            every project.
          </p>
          <button>See Projects</button>
          <button>Let's Connect </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
