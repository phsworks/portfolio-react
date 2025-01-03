import "./Footer.css"
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

function Footer(){

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  return (
    <div className="footer-container">
      <div className="logo">
        <NavLink to="/" onClick={scrollUp}>
          <img width={55} src={logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default Footer