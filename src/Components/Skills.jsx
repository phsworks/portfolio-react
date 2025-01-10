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
        <p>
          I have experience building responsive websites and developing
          interactive web applications. I'm always
          exploring new technologies and finding creative ways to improve and
          grow in the tech world.
        </p>
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
            <img width={80} src={CSS} alt="CSS" />
          </div>
          <p>CSS</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img src={Javascript} alt="Javascript" />
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
            <img src={Git} alt="Git" />
          </div>
          <p>Git</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img src={GithubLogo} alt="Git" />
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
            <img src={MySQL} alt="MySQL" />
          </div>
          <p>MySQL</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img src={NodeJS} alt="NodeJS" />
          </div>
          <p>NodeJS</p>
        </div>
        <div className="skill-container">
          <div className="skill-card">
            <img src={MongoDB} alt="NodeJS" />
          </div>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
