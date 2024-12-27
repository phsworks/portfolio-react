import "./Footer.css"
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

function Footer(){

  return (
    <div className="footer-container">
      <div className="logo">
        <NavLink to="/">
          <img width={55} src={logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default Footer