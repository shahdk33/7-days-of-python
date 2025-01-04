import React from 'react';
import logo from '../assets/frij.png'
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" /> {/* Logo image */}
                </div>
                
                <div className="navbar-links">
                <Link to="/">Find recipes</Link>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/about-us">About us</Link>
                </div>
            </nav>

            <h1>About Us</h1>
            <p>Welcome to frij! Here's what we're all about...</p>
        </div>
    );
}

export default AboutUs;
