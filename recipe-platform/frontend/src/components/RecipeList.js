import React from 'react';

const RecipeList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe._id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <p>{recipe.ingredients.join(', ')}</p>
                    <p>{recipe.steps.join(', ')}</p>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
