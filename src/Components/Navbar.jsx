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
            <img width={50} src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav>
          <ul className="navbar-links">
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
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
        <div className="menu">
            <img width={30} src={menu} alt="menu-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
