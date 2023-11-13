const User = require("./User");
const Recipe = require("./Recipe");
const Category = require("./Category");
const Ingredient = require("./Ingredient");
const RecipeIngredient = require("./RecipeIngredient");

// Recipe belongsTo Category
Recipe.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  as: "category",
});

// Categories have many Recipes
Category.hasMany(Recipe, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  as: "recipes",
});

// Recipe belongToMany Ingredients (through RecipeIngredient)
Recipe.belongsToMany(Ingredient, {
  through: RecipeIngredient,
  foreignKey: "recipe_id",
  onDelete: "CASCADE",
});

// Ingredients belongToMany Recipes (through RecipeIngredient)
Ingredient.belongsToMany(Recipe, {
  through: RecipeIngredient,
  foreignKey: "ingredient_id",
  onDelete: "CASCADE",
});

// User has many Recipes
User.hasMany(Recipe, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Recipe,
  Category,
  Ingredient,
  RecipeIngredient,
};
