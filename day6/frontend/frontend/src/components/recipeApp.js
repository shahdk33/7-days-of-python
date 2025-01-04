import React, { useState } from 'react';
import '../App.css'; // Import CSS for styling
import logo from '../assets/frij.png'
import foodImage from '../assets/HomeImage.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ClipLoader } from 'react-spinners';

//TODO: Responsive design, get time to make, and get recipe onpress of get recipe button, and footer/nav links

function RecipeApp() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state

    const handleInputChange = (e) => setIngredients(e.target.value);

    const fetchRecipes = async () => {
        setLoading(true); // Start loading

        try {
            const response = await fetch('/recipes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingredients: ingredients.split(',') }),
            });
            const data = await response.json();
            setRecipes(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }finally {
            setLoading(false); // Stop loading
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
                            Enter ingredients you have on hand, and get recipes ideas tailored to you!
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

                    
                        {/* Loading Indicator */}
                        {loading && <div className="loading-container">
                            <ClipLoader color="#133E87" size={50} />
                                    </div>}

                </div>

                <div className="right-side">
                    <img src={foodImage} className="mage" alt="Food" />
                </div>
            </div>




            {/* Recipe Results */}
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <h2>{recipe.title}</h2>
                        <h3>Other ingredients</h3>
                        <ul>
                            {recipe.missedIngredients.map((ing, i) => (
                                <li key={i}>{ing.original}</li>
                            ))}
                        </ul>

                        {/* Display Recipe Details */}
                        {recipe.details && (
                            <>
                            <div className="time-to-make">
                                <AccessTimeIcon style={{ marginBottom: -5 }} />  {/* Clock icon */}
                            <span>{recipe.details.readyInMinutes} min</span>  {/* Time in minutes */}
                        </div>
                                {/* <p className="vegan-status">{recipe.details.vegan ? "Vegan" : "Not Vegan"}</p> */}
                            </>
                        )}
                        <button className="get-recipe-button"><a href={recipe.details.url} target='blank'>Get recipe</a></button>
                        {/* button endpoint: url with recipe id recipe.details.url*/}
                    </div>
                ))}
            </div>

            <footer className="footer">
    <div className="footer-left">
        <h2>frij</h2>
        <p>© 2024</p>
        <p>Shahd Khartabil</p>
    </div>
    <div className="footer-right">
        <div className="footer-nav">
            <a href="#find-recipes">Find Recipes</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#about-us">About Us</a>
        </div>
    </div>
</footer>

        </div>
        
    );
}

export default RecipeApp;
