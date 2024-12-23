import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import behance from "../assets/behance.png";
import github from "../assets/github.png";
import menu from "../assets/menu-icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <img width={55} src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav>
          <ul className="navbar-links">
            <li>Home</li>
            <li>My Projects</li>
            <li>My Skills</li>
            <li>Contact</li>
          </ul>
        </nav>
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
        <div className="menu">
          <img width={48} src={menu} alt="menu-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
