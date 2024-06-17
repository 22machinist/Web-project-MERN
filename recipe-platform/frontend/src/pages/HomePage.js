import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipe Sharing Platform</h1>
            <RecipeForm fetchRecipes={fetchRecipes} />
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default HomePage;
