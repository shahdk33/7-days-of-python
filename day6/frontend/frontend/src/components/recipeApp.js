import React, { useState } from 'react';
import '../App.css'; // Import CSS for styling
import logo from '../assets/frij.png'
import foodImage from '../assets/HomeImage.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

//TODO: Responsive design, and footer/nav links

function RecipeApp() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state

    const handleInputChange = (e) => setIngredients(e.target.value);

    const fetchRecipes = async () => {
        setLoading(true); // Start loading

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/recipes`, {
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
                <Link to="/">Find recipes</Link>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/about-us">About us</Link>
                </div>
            </nav>

            {/* Header Section */}
            <div className="HomePage">
                <div className="left-side">
                    <header className="header">
                        <h1>What you got in your <b>frij?</b></h1>
                        <p className="description">
                            Enter ingredients you have on hand, <b>separated by commas</b> and get recipes ideas tailored to you!
                        </p>
                    </header>

                    {/* Search Bar Section */}
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Banana, apple, egg ..."
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

    <div className="recipe-card-content">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-details">
        <div className="time-to-make">
          <AccessTimeIcon className="icon" /> 
          <span>{recipe.details?.readyInMinutes} min</span>
        </div>
      </div>
      <h3>Other Ingredients</h3>
      <ul className="ingredients-list">
        {recipe.missedIngredients.map((ing, i) => (
          <li key={i}>{ing.original}</li>
        ))}
      </ul>
      <a
        href={recipe.details.url}
        target="_blank"
        rel="noopener noreferrer"
        className="recipe-button"
      >
        Get Recipe
      </a>
    </div>
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
                        <Link to="/">Find recipes</Link>
                        <Link to="/how-it-works">How it works</Link>
                        <Link to="/about-us">About us</Link>
                    </div>
                </div>
            </footer>

        </div>
        
    );
}

export default RecipeApp;
