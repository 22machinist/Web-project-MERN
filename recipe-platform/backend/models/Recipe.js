const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    ingredients: [String],
    steps: [String],
    image: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' }
});

module.exports = mongoose.model('Recipe', recipeSchema);
