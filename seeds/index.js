const seedCategories = require("./category-seeds");
const seedRecipes = require("./recipes-seeds");
const seedIngedients = require("./ingredients-seeds");
const seedRecipeIngredients = require("./recipe-ingredients-seeds");
const { Category } = require("../models");
const { RecipeIngredient } = require("../models");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedRecipes();
  console.log("\n----- RECIPES SEEDED -----\n");

  await seedIngedients();
  console.log("\n----- INGREDIENTS SEEDED -----\n");

  await seedRecipeIngredients();
  console.log("\n----- RECIPE INGREDIENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();

const { User, Recipe } = require("../models");

const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData);

  for (const recipe of recipeData) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    const createdRecipe = await Recipe.create({
      ...recipe,
      user_id: randomUser.id,
      category_id: randomCategory.id,
    });

    await RecipeIngredient.bulkCreate(
      recipe.ingredients.map((ingredient) => ({
        recipe_id: createdRecipe.id,
        ingredient_id: ingredient.id,
      }))
    );
  }

  process.exit(0);
};

seedDatabase();
