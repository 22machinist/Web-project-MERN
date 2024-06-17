const Recipe = require('../models/Recipe');

// Get all recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('user', 'username');
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    const { title, description, ingredients, steps, image } = req.body;
    const userId = req.user.id;
    try {
        const recipe = new Recipe({ title, description, ingredients, steps, image, user: userId });
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a recipe
exports.updateRecipe = async (req, res) => {
    const { title, description, ingredients, steps, image, status } = req.body;
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        recipe.title = title || recipe.title;
        recipe.description = description || recipe.description;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.steps = steps || recipe.steps;
        recipe.image = image || recipe.image;
        recipe.status = status || recipe.status;
        await recipe.save();
        res.json(recipe);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        await recipe.remove();
        res.json({ message: 'Recipe deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
