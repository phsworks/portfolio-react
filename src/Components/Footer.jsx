import "./Footer.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import desktoplogo from "../assets/PHS-desktop.svg"
import { useTranslation } from "react-i18next";

function Footer() {
   const { t } = useTranslation();

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
                <NavLink onClick={scrollUp} to="/aboutme">
                  {t("About")}
                </NavLink>
              </li>
              <li>
                <Link onClick={scrollUp} to="/#skills-section">
                  Skills
                </Link>
              </li>
              <li>
                <Link onClick={scrollUp} to="/#projects-section">
                  {t("projects")}
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
      <small> © 2025 PHS Development All Rights Reserved </small>
    </div>
  );
}

export default Footer;
