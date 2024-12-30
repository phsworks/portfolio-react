import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import behance from "../assets/behance.png";
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
                <img width={25} src={behance} alt="behance" />
              </a>
            </li>
          </ul>
        </div>
        <div className="connect-button">
          <button className="primary-button">Let's connect</button>
        </div>
        <div className={`menu-icon ${isOpen ? "open-menu" : "close-menu"}`}>
          <button onClick={toggleMenu}>
            <img className={`hamburger ${isOpen ? "hidden" : "visible"}`} width={45} src={menu} alt="menu-icon" />
            <img className={`x-mark ${isOpen ? "open" : "close"}`} width={45} src={X} alt="x-mark" />
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
              <Link to="/#projects-section">My projects</Link>
            </li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
