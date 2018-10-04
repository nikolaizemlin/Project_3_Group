import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/blog"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        History of Beer
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        How Too
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/learn"
        className={
          window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
        }
      >
        Recipies
      </Link>
    </li>

  </ul>
);

export default NavTabs;
