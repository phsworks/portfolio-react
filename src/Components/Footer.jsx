import "./Footer.css"
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/Logo.png";

function Footer(){

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="footer-container">
      <div className="logo">
        <NavLink to="/" onClick={scrollUp}>
          <img width={55} src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="footer-menu">
        <nav>
          <ul className="footer-links">
            <li>
              <NavLink to="/aboutme"> About Me</NavLink>
            </li>
            <li>
              <Link onClick={scrollUp} to="/#skills-section">
                Skills
              </Link>
            </li>
            <li>
              <Link onClick={scrollUp} to="/#projects-section">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={scrollUp} to="/#contact-section">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <small> © 2025 ALl Rights Reserved by PHS Development</small>
      </div>
    </div>
  );
}

export default Footer