import "./ErrorPage.css"
import { NavLink } from "react-router-dom";
import error from "../assets/404.webp"

function ErrorPage() {
  return (
    <div className="error">
      <img src={error} alt="404" />
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button className="secondary-button">
        <NavLink to={"/"}>Back to Home</NavLink>
      </button>
    </div>
  );
}

export default ErrorPage
