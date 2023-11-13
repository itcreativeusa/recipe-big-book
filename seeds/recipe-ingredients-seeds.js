const { RecipeIngredient } = require("../models");

const recipeIngredientData = [
  {
    recipe_id: 1,
    ingredient_id: 1,
  },
  {
    recipe_id: 1,
    ingredient_id: 5,
  },
  {
    recipe_id: 2,
    ingredient_id: 1,
  },
  {
    recipe_id: 2,
    ingredient_id: 4,
  },
  {
    recipe_id: 2,
    ingredient_id: 5,
  },
  {
    recipe_id: 3,
    ingredient_id: 1,
  },
  {
    recipe_id: 3,
    ingredient_id: 9,
  },
  {
    recipe_id: 4,
    ingredient_id: 10,
  },
  {
    recipe_id: 5,
    ingredient_id: 1,
  },
  {
    recipe_id: 5,
    ingredient_id: 10,
  },
  {
    recipe_id: 6,
    ingredient_id: 8,
  },
  {
    recipe_id: 6,
    ingredient_id: 4,
  },
  {
    recipe_id: 6,
    ingredient_id: 6,
  },
  {
    recipe_id: 7,
    ingredient_id: 6,
  },
  {
    recipe_id: 7,
    ingredient_id: 9,
  },
  {
    recipe_id: 7,
    ingredient_id: 4,
  },
  {
    recipe_id: 8,
    ingredient_id: 4,
  },
  {
    recipe_id: 9,
    ingredient_id: 6,
  },
  {
    recipe_id: 9,
    ingredient_id: 4,
  },
  {
    recipe_id: 10,
    ingredient_id: 9,
  },
  {
    recipe_id: 10,
    ingredient_id: 2,
  },
  {
    recipe_id: 10,
    ingredient_id: 4,
  },
  {
    recipe_id: 11,
    ingredient_id: 2,
  },
  {
    recipe_id: 11,
    ingredient_id: 5,
  },
  {
    recipe_id: 12,
    ingredient_id: 8,
  },
  {
    recipe_id: 12,
    ingredient_id: 5,
  },
  {
    recipe_id: 13,
    ingredient_id: 9,
  },
  {
    recipe_id: 13,
    ingredient_id: 8,
  },
  {
    recipe_id: 13,
    ingredient_id: 6,
  },
  {
    recipe_id: 14,
    ingredient_id: 3,
  },
  {
    recipe_id: 16,
    ingredient_id: 5,
  },
  {
    recipe_id: 16,
    ingredient_id: 1,
  },
  {
    recipe_id: 17,
    ingredient_id: 7,
  },
  {
    recipe_id: 18,
    ingredient_id: 5,
  },
  {
    recipe_id: 19,
    ingredient_id: 7,
  },
  {
    recipe_id: 19,
    ingredient_id: 5,
  },
  {
    recipe_id: 19,
    ingredient_id: 1,
  },
  {
    recipe_id: 21,
    ingredient_id: 9,
  },
  {
    recipe_id: 21,
    ingredient_id: 8,
  },
  {
    recipe_id: 22,
    ingredient_id: 9,
  },
  {
    recipe_id: 23,
    ingredient_id: 5,
  },
  {
    recipe_id: 23,
    ingredient_id: 9,
  },
  {
    recipe_id: 23,
    ingredient_id: 4,
  },
  {
    recipe_id: 23,
    ingredient_id: 8,
  },
  {
    recipe_id: 24,
    ingredient_id: 5,
  },
  {
    recipe_id: 24,
    ingredient_id: 10,
  },
  {
    recipe_id: 24,
    ingredient_id: 4,
  },
  {
    recipe_id: 25,
    ingredient_id: 9,
  },
  {
    recipe_id: 25,
    ingredient_id: 8,
  },
  {
    recipe_id: 25,
    ingredient_id: 4,
  },
  {
    recipe_id: 25,
    ingredient_id: 5,
  },
  {
    recipe_id: 28,
    ingredient_id: 10,
  },
  {
    recipe_id: 29,
    ingredient_id: 10,
  },
  {
    recipe_id: 30,
    ingredient_id: 7,
  },
];

const seedRecipeIngredients = () =>
  RecipeIngredient.bulkCreate(recipeIngredientData);

module.exports = seedRecipeIngredients;
