import "./Skills.css";
import Javascript from "../assets/Javascript.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import React from "../assets/React.png";
import Express from "../assets/Express.js.png";
import MongoDB from "../assets/MongoDB.png";
import Wordpress from "../assets/Wordpress.png";
import MySQL from "../assets/MySQL.png";
import NodeJS from "../assets/NodeJS.png";
import Git from "../assets/Git.png";
// import Github from "../assets/Github.png";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-top">
        <h2>My Skills</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="all-skills">
        <div className="skill-container">
          <div className="skill-card">
            <img width={100} src={HTML} alt="HTML" />
            <p>92%</p>
          </div>
          <p>HTML</p>
        </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={CSS} alt="CSS" />
              <p>92%</p>
            </div>
            <p>CSS</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Javascript} alt="Javascript" />
              <p>92%</p>
            </div>
            <p>Javascript</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={React} alt="React" />
              <p>92%</p>
            </div>
            <p>React</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Git} alt="Git" />
              <p>92%</p>
            </div>
            <p>Git</p>
          </div>
          {/* <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Github} alt="Github" />
              <p>92%</p>
            </div>
            <p>Github</p> */}
          {/* </div> */}
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Express} alt="Express" />
              <p>92%</p>
            </div>
            <p>Express</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Wordpress} alt="Wordpress" />
              <p>92%</p>
            </div>
            <p>Wordpress</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={MySQL} alt="MySQL" />
              <p>92%</p>
            </div>
            <p>MySQL</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={NodeJS} alt="NodeJS" />
              <p>92%</p>
            </div>
            <p>NodeJS</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={MongoDB} alt="NodeJS" />
              <p>92%</p>
            </div>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
  );
}

export default Skills;
