import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import behance from "../assets/behance.png";
import github from "../assets/github.png";
import menu from "../assets/menu-icon.png";
import X from "../assets/X-mark.png"

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <img width={55} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="socials">
          <ul className="social-links">
            <li>
              <a href="">
                <img width={25} src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="">
                <img width={25} src={github} alt="github" />
              </a>
            </li>
            <li>
              <a href="">
                <img width={25} src={behance} alt="behance" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="primary-button">Let's connect</button>
        </div>
        <div className={`menu-icon ${isOpen ? "open-menu" : ""}`}>
          <button onClick={toggleMenu}>
            <img className="hamburger" width={45} src={menu} alt="menu-icon" />
            <img className="x-mark" width={45} src={X} alt="x-cross" />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav>
          <ul className="mobile-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">My Skills</a>
            </li>
            <li>
              <NavLink to="projects-container"> My Projects </NavLink>
            </li>

            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
