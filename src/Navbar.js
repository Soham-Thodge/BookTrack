import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookingForm from "./BookingForm";
import ContactFooter from "./ContactFooter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/" className="Logo-link">
          <img src={require("./images/Logo.png")} alt="Logo" className="Logo" />
        </Link>
        <div className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <li className="navlinks">
            <Link to="/" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
              Home
            </Link>
          </li>
          <li className="navlinks">
            <Link to="/booking" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
              Booking
            </Link>
          </li>
          <li className="navlinks">
            <Link to="/contact" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
              Contact
            </Link>
          </li>
        </ul>
        {mobileMenuOpen && (
          <div className="mobile-overlay">
            <ul className="nav-links">
              <li className="navlinks" style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
                  Home
                </Link>
              </li>
              <li className="navlinks" style={{ marginBottom: '10px' }}>
                <Link to="/booking" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
                  Booking
                </Link>
              </li>
              <li className="navlinks" style={{ marginBottom: '10px' }}>
                <Link to="/contact" style={{ color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;