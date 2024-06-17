import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ fetchRecipes }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRecipe = {
            title,
            description,
            ingredients: ingredients.split(','),
            steps: steps.split(','),
            image,
        };
        await axios.post('/api/recipes', newRecipe);
        fetchRecipes();
        setTitle('');
        setDescription('');
        setIngredients('');
        setSteps('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <input
                type="text"
                placeholder="Steps (comma separated)"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default RecipeForm;
