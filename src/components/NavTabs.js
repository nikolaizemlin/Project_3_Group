import React from "react";
import { Link } from "react-router-dom";
import '../styles/about.css';

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
        to="/History"
        className={
          window.location.pathname === "/History" ? "nav-link active" : "nav-link"
        }
      >
        History of Beer
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/howtoo"
        className={
          window.location.pathname === "/howtoo" ? "nav-link active" : "nav-link"
        }
      >
        How Too
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Recipe"
        className={
          window.location.pathname === "/Recipe" ? "nav-link active" : "nav-link"
        }
      >
        Recipies
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/MyRecipe"
        className={
          window.location.pathname === "/MyRecipe" ? "nav-link active" : "nav-link"
        }
      >
        My Recipies
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/blog"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </Link>
    </li>

  </ul>
);

export default NavTabs;
