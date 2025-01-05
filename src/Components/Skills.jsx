import "./Skills.css";
import Javascript from "../assets/Javascript.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import ReactLogo from "../assets/React.png";
import Express from "../assets/Express.js.png";
import MongoDB from "../assets/MongoDB.png";
import Wordpress from "../assets/Wordpress.png";
import MySQL from "../assets/MySQL.png";
import NodeJS from "../assets/NodeJS.png";
import Git from "../assets/Git.png";
import GithubLogo from "../assets/GithubLogo.png"

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
          </div>
          <p>HTML</p>
        </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={CSS} alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Javascript} alt="Javascript" />
            </div>
            <p>Javascript</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={ReactLogo} alt="React" />
            </div>
            <p>React</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Git} alt="Git" />
            </div>
            <p>Git</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={GithubLogo} alt="Git" />
            </div>
            <p>Github</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Express} alt="Express" />
            </div>
            <p>Express</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={Wordpress} alt="Wordpress" />
            </div>
            <p>Wordpress</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={MySQL} alt="MySQL" />
            </div>
            <p>MySQL</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={NodeJS} alt="NodeJS" />
            </div>
            <p>NodeJS</p>
          </div>
          <div className="skill-container">
            <div className="skill-card">
              <img width={100} src={MongoDB} alt="NodeJS" />
            </div>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
  );
}

export default Skills;
