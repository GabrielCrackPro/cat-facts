import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/GabrielCrackPro/cat-facts">
            Github Repository
          </a>
        </li>
      </ul>
    </nav>
  );
}
