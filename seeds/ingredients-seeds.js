const { Ingredient } = require("../models");

const ingredientData = [
  {
    ingredient_name: "Eggs",
  },
  {
    ingredient_name: "Chicken",
  },
  {
    ingredient_name: "Tuna",
  },
  {
    ingredient_name: "Cheese",
  },
  {
    ingredient_name: "Butter",
  },
  {
    ingredient_name: "Tomato",
  },
  {
    ingredient_name: "Banana",
  },
  {
    ingredient_name: "Garlic",
  },
  {
    ingredient_name: "Olive oil",
  },
  {
    ingredient_name: "Milk",
  }
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
