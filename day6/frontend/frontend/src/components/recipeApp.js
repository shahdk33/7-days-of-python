// frontend/src/components/RecipeApp.js
import React, { useState } from 'react';
import '../App.css'; // Import CSS for styling
import logo from '../assets/frij.png'
import foodImage from '../assets/HomeImage.png'

function RecipeApp() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleInputChange = (e) => setIngredients(e.target.value);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('/recipes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients: ingredients.split(',') }),
            });
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="App">
            {/* Navbar */}
            <nav className="navbar">
            <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" /> {/* Logo image */}
                </div>                
                
                <div className="navbar-links">
                    <a href="#find-recipes">Find recipes</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#about-us">About us</a>
                </div>
            </nav>

            {/* Header Section */}
            <div className="HomePage">
            <div className="left-side">
            <header className="header">
                <h1>What you got in your <b>frij?</b></h1>
                <p className="description">
                    Enter ingredients you have on hand, and get recipe ideas tailored to you!
                </p>
            </header>

            {/* Search Bar Section */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Enter ingredients, separated by commas"
                    value={ingredients}
                    onChange={handleInputChange}
                />
                <button className="search-button" onClick={fetchRecipes}>Let's go</button>
            </div>
            </div>

            <div className="right-side">
                <img src={foodImage} className="mage"></img>
            </div>
            </div>

            {/* Recipe Results */}
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <h2>{recipe.title}</h2>
                        <h3>Used Ingredients:</h3>
                        <ul>
                            {recipe.usedIngredients.map((ing, i) => (
                                <li key={i}>{ing.original}</li>
                            ))}
                        </ul>
                        <h3>Missed Ingredients:</h3>
                        <ul>
                            {recipe.missedIngredients.map((ing, i) => (
                                <li key={i}>{ing.original}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeApp;
