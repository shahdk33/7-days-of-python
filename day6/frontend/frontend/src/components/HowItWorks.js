import React from 'react';
import logo from '../assets/frij.png';
import { Link } from 'react-router-dom';
import HowItWorksImage from '../assets/HowItWorksImage.png';

function HowItWorks() {
    return (
        <div>
            {/* Navbar */}
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

            {/* Main Content */}
            <div className="HomePage">
                <div className="left-side">
                    <header className="header">
                        <h1>How does <b>frij</b> work?</h1>
                        <p className="description">
                            frij is powered by a Python backend server that does all the heavy lifting to make finding recipes quick and easy. Here's how it works:
                        </p>
                        <ol className="how-it-works-list">
                            <li><b>Enter Ingredients:</b> Simply type in the ingredients you have on hand—like "chicken, rice, and tomatoes"—in the search bar.</li>
                            <li><b>Backend Magic:</b> Once you hit the "Let's Go" button, the Python backend server takes your input and communicates with the <b>Spoonacular API</b>, a comprehensive database of recipes.</li>
                            <li><b>Smart Matching:</b> The server analyzes your ingredients and fetches recipes that match what you already have, along with details like preparation time and any additional ingredients you might need.</li>
                            <li><b>Results in Seconds:</b> Within moments, you'll see tailored recipes, ready for you to explore and cook.</li>
                        </ol>
                        <p className="description">
                            With frij, you no longer have to spend time brainstorming meal ideas—it’s all automated, saving you time and energy.
                        </p>
                    </header>
                </div>

                <div className="right-side">
                    <img src={HowItWorksImage} className="mage" alt="How It Works" />
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-left">
                    <h2>frij</h2>
                    <p>© 2024</p>
                    <p>Shahd Khartabil</p>
                </div>

                <div className="footer-right">
                    <div className="footer-nav">
                        <Link to="/">Find recipes</Link>
                        <Link to="/how-it-works">How it works</Link>
                        <Link to="/about-us">About us</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HowItWorks;
