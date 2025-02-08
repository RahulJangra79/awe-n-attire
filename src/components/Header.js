import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-main">
      {/* Logo */}
      <div className="header-logo">
        {/* <h2>Awe & Attire</h2> */}
        
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Menu */}
      <div className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <Link to="about" >About</Link>
            {/* <Link className="navbar-item" to="contact">CONTACT</Link> */}
          </li>
        </ul>
        <ul>
          <li><a href="#">Login</a></li>
          <li>
            <a href="#">
            <i className="fa-solid fa-bag-shopping"></i>
            </a>          
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
