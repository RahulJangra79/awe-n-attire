import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Get the current URL
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Function to check authentication status and get user name
  const checkAuthStatus = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (token && user) {
      setIsAuthenticated(true);
      setUserName(user.name);
    } else {
      setIsAuthenticated(false);
      setUserName("");
    }
  };

  useEffect(() => {
    checkAuthStatus();
    window.addEventListener("storage", checkAuthStatus);
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserName("");
    setIsDropdownOpen(false);
    alert("You have been logged out.");
    window.dispatchEvent(new Event("storage"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-main">
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

      <div className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link></li>
          <li><Link to="women" className={location.pathname === "/women" ? "active-link" : ""}>Women</Link></li>
          <li><Link to="men" className={location.pathname === "/men" ? "active-link" : ""}>Men</Link></li>
          <li><Link to="/allproducts" className={location.pathname === "/allproducts" ? "active-link" : ""}>Shop</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>About</Link></li>
        </ul>
        <ul>
          <li className="user-dropdown">
            {isAuthenticated ? (
              <div className="dropdown">
                <button className="user-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {userName} <i className="fa-solid fa-caret-down"></i>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            )}
          </li>
          <li>
            <Link to="/cart">
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
