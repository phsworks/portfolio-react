import "./Skills.css";
import Javascript from "../assets/Javascript.webp";
import HTML from "../assets/HTML.webp";
import CSS from "../assets/CSS.webp";
import ReactLogo from "../assets/React.webp";
import MongoDB from "../assets/MongoDB.webp";
import Wordpress from "../assets/Wordpress.webp";
import MySQL from "../assets/MySQL.webp";
import NodeJS from "../assets/NodeJS.webp";
import Git from "../assets/Git.webp";
import GithubLogo from "../assets/GithubLogo.webp"

function Skills() {
  return (
    <div className="skills">
      <div className="skills-top">
        <h2>My Skills</h2>
      </div>
      <div className="all-skills">
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" width={100} src={HTML} alt="HTML" />
          </div>
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" width={80} src={CSS} alt="CSS" />
          </div>
          <p>CSS</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={Javascript} alt="Javascript" />
          </div>
          <p>Javascript</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" width={100} src={ReactLogo} alt="React" />
          </div>
          <p>React</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={Git} alt="Git" />
          </div>
          <p>Git</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={GithubLogo} alt="Git" />
          </div>
          <p>Github</p>
        </div>

        <div className="skill-container">
          <div className="skill-card">
            <img src={Wordpress} alt="Wordpress" />
          </div>
          <p>Wordpress</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={MySQL} alt="MySQL" />
          </div>
          <p>MySQL</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={NodeJS} alt="NodeJS" />
          </div>
          <p>NodeJS</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img loading="lazy" src={MongoDB} alt="NodeJS" />
          </div>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
