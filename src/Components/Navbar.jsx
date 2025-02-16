import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import mobilelogo from "../assets/PHS-mobile.svg";
import desktoplogo from "../assets/PHS-desktop.svg";
import menu from "../assets/menu-icon.webp";
import X from "../assets/X-mark.webp";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false)
  const { t } = useTranslation();



  const toggleMenu = () => {
    setIsOpen((open) => {
      const menuOpen = !open;

      if (menuOpen) {
        setNavBackground(true);
      } else {
        if (window.scrollY < 30) {
          setNavBackground(false);
        }
      }

      return menuOpen;
    });
  };

  useEffect(() => {
    const toggleNavbar = () => {

      if (window.scrollY > 10) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    }

    window.addEventListener('scroll', toggleNavbar)

    return () => {
      window.removeEventListener('scroll', toggleNavbar)
    };

  }, [isOpen])


  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar-section">
      <div
        className={
          navBackground ? "navbar-container-background" : "navbar-container"
        }
      >


        <div className="logo-container">
          <NavLink to="/">
            <img
              className="logo-mobile"
              width={40}
              src={mobilelogo}
              alt="logo"
              onClick={scrollUp}
            />
          </NavLink>
          <NavLink to="/">
            <img
              className="logo-desktop"
              src={desktoplogo}
              alt="logo"
              onClick={scrollUp}
            />
          </NavLink>
        </div>
        <div className="buttons-mobile">
          <LanguageSwitcher />
          <button className="primary-button">
            <Link to="/#contact-section">Contact</Link>
          </button>
        </div>
        <div className="navbar">
          <ul className="navbar-links">
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <NavLink onClick={scrollUp} to="/aboutme">
                {t("About")}
              </NavLink>
            </li>
            <li>
              <Link to="/#projects-section">{t("projects")}</Link>
            </li>
            <li>
              <Link to="/#skills-section">Skills</Link>
            </li>
          </ul>
          <div className="connect-button">
            <button className="primary-button">
              <Link to="/#contact-section">Contact</Link>
            </button>
          </div>
        </div>
        {/* Mobile and tablet menu */}
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
                {t("About")}
              </NavLink>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/#projects-section">
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/#skills-section">
                Skills
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
