// frontend/src/App.js
import React from 'react';
import RecipeApp from './components/recipeApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RecipeApp />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
            </Routes>
        </Router>
    );
}

export default App;
