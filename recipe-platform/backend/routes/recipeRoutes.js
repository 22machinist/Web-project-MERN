const express = require('express');
const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getRecipes);
router.post('/', authMiddleware, createRecipe);
router.put('/:id', authMiddleware, updateRecipe);
router.delete('/:id', authMiddleware, deleteRecipe);

module.exports = router;
