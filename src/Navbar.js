import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import BookingForm from "./BookingForm";
import ContactFooter from "./ContactFooter";
import { useAuth } from './AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };
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
            <NavLink to="/" activeClassName="active" onClick={() => setMobileMenuOpen(false)} style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>
              Home
            </NavLink>
          </li>
          {currentUser ? (
          <>
            <li>
              <Link to="/profile" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout} style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>Login</Link>
            </li>
            <li>
              <Link to="/signup" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>Sign Up</Link>
            </li>
          </>
        )}
        </ul>
        {mobileMenuOpen && (
          <div className="mobile-overlay">
            <ul className="nav-links">
              <li className="navlinks" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>
                <NavLink to="/" activeClassName="active" onClick={() => setMobileMenuOpen(false)} >
                  Home
                </NavLink>
              </li>
              <li className="navlinks" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>
                <NavLink to="/login" activeClassName="active" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </NavLink>
              </li>
              <li className="navlinks" style={{ marginBottom: '10px',color: 'red', textDecoration: 'none', padding: '10px 20px', background: 'white', borderRadius: '5px', transition: 'background-color 0.3s, color 0.3s'  }}>
                <NavLink to="/signup" activeClassName="active" onClick={() => setMobileMenuOpen(false)}>
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
