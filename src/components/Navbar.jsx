import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>AI Career Coach</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>

        <li>
          <NavLink to="/interview">Interview</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/assessment">Assessment</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;