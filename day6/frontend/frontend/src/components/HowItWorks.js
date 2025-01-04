import React from 'react';
import logo from '../assets/frij.png'
import { Link } from 'react-router-dom';

function HowItWorks() {
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

            <h1>How It Works</h1>
            <p>Learn how to use frij to find recipes effortlessly.</p>
        </div>
    );
}

export default HowItWorks;
