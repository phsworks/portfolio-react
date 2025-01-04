import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import behance from "../assets/behance.png";
import menu from "../assets/menu-icon.png";
import X from "../assets/X-mark.png";

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
          <button className="primary-button">
            <Link to="/#contact-section">Let's Connect</Link>
          </button>
        </div>
        <div className={`menu-icon ${isOpen ? "open-menu" : "close-menu"}`}>
          <button onClick={toggleMenu}>
            <img
              className={`hamburger ${isOpen ? "hidden" : "visible"}`}
              width={45}
              src={menu}
              alt="menu-icon"
            />
            <img
              className={`x-mark ${isOpen ? "open" : "close"}`}
              width={45}
              src={X}
              alt="x-mark"
            />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav>
          <ul className="mobile-links">
            <li>
              <NavLink onClick={toggleMenu} to="/aboutme">
                About
              </NavLink>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/#skills-section"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/#projects-section">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/#contact-section">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
