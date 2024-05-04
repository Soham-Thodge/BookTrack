import React, { useState } from "react";
import { BrowserRouter as Routes, Route, Switch, Link } from 'react-router-dom';
import BookingForm from "./BookingForm";
import ContactFooter from "./ContactFooter";
import { Simulate } from "react-dom/test-utils";

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav>
            <div className="navbar-container">
            <Link to="/" className="Logo-link">
                <img src={require("./images/Logo.png")} alt="Logo" className="Logo"/>
            </Link>

            <div className="hamburger-menu" onClick={toggleMobileMenu}>
                <div className={`line ${mobileMenuOpen} ? 'open' : '' `}></div>
                <div className={`line ${mobileMenuOpen} ? 'open' : '' `}></div>
                <div className={`line ${mobileMenuOpen} ? 'open' : '' `}></div>
            </div>
            <ul style={{ display:'flex',listStyleType:'none', padding:10}}>
                <li style={{ marginRight:'10px' }}><Link to="/"><img src="" alt=""/></Link></li>
                <li style={{ marginRight:'10px' }}>
                    <Link to="/" style={{ 
                        color: 'red', 
                        textDecoration: 'none',
                        padding: '10px 20px',
                        background: 'white',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s, color 0.3s',
                        }}>Home</Link>
                </li>
                <li style={{ marginRight:'10px' }}>
                    <Link to="/booking" style={{ 
                        color: 'red', 
                        textDecoration: 'none',
                        padding: '10px 20px',
                        background: 'white',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s, color 0.3s',
                        }}>Booking</Link>
                </li>
                <li style={{ marginRight:'10px' }}>
                    <Link to="/contact" style={{ 
                        color: 'red', 
                        textDecoration: 'none',
                        padding: '10px 20px',
                        background: 'white',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s, color 0.3s',
                        }}>Contact</Link>
                </li>
            </ul>
        </div>
        </nav>

    );
};

export default Navbar;