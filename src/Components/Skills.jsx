import "./Skills.css";
import { useTranslation } from "react-i18next";
import Javascript from "../assets/Javascript.webp";
import HTML from "../assets/HTML.webp";
import CSS from "../assets/CSS.webp";
import ReactLogo from "../assets/React.webp";
import MongoDB from "../assets/MongoDB.webp";
import Wordpress from "../assets/Wordpress.webp";
import MySQL from "../assets/MySQL.webp";
import NodeJS from "../assets/NodeJS.webp";
import Git from "../assets/Git.webp";
import CSharpLogo from "../assets/csharp.webp";
import UnityLogo from "../assets/unity.webp";
import docker from "../assets/docker.webp";
import python from "../assets/python.webp";

// tools without an icon show a short text in the card
const groups = [
  {
    key: "toolsFrontend",
    tools: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: Javascript },
      { name: "React", icon: ReactLogo },
    ],
  },
  {
    key: "toolsBackend",
    tools: [
      { name: "Node.js", icon: NodeJS },
      { name: "Python", icon: python },
      { name: "MySQL", icon: MySQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Postgres (Neon)", short: "PG" },
    ],
  },
  {
    key: "toolsMobile",
    tools: [
      { name: "React Native", icon: ReactLogo },
      { name: "Unity", icon: UnityLogo },
      { name: "C#", icon: CSharpLogo },
    ],
  },
  {
    key: "toolsOther",
    tools: [
      { name: "Git / GitHub", icon: Git },
      { name: "Docker", icon: docker },
      { name: "Vercel", short: "▲" },
      { name: "WordPress", icon: Wordpress },
    ],
  },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <div className="skills-top">
        <h2>Tools</h2>
      </div>
      {groups.map((group) => (
        <div className="skill-group" key={group.key}>
          <h3>{t(group.key)}</h3>
          <div className="all-skills">
            {group.tools.map((tool) => {
              const name = tool.name;
              return (
                <div className="skill-container" key={tool.name}>
                  <div className={`skill-card ${tool.icon ? "" : "skill-card-text"}`}>
                    {tool.icon ? (
                      <img loading="lazy" src={tool.icon} alt={name} />
                    ) : (
                      <span>{tool.short}</span>
                    )}
                  </div>
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
