import "./Footer.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import mobilelogo from "../assets/PHS-mobile.svg";
import desktoplogo from "../assets/PHS-desktop.svg"

function Footer() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="logo-footer">
          <NavLink to="/" onClick={scrollUp}>
            <img className="footer-logo" src={desktoplogo} alt="footer-logo" />
          </NavLink>
        </div>
        <div className="footer-menu">
          <nav>
            <ul className="footer-links">
              <li>
                <NavLink onClick={scrollUp} to="/aboutme"> About</NavLink>
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
        </div>
      </div>
      <small> © 2025 ALl Rights Reserved by PHS Development</small>
    </div>
  );
}

export default Footer;
