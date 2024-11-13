// frontend/src/components/RecipeApp.js
import React, { useState } from 'react';

function RecipeApp() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleInputChange = (e) => setIngredients(e.target.value);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('/recipes', {  // Only use the endpoint
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
        <div>
            <h1>Recipe Finder</h1>
            <input
                type="text"
                placeholder="Enter ingredients separated by commas"
                value={ingredients}
                onChange={handleInputChange}
            />
            <button onClick={fetchRecipes}>Get Recipes</button>
            <div>
                {recipes.map((recipe, index) => (
                    <div key={index}>
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
