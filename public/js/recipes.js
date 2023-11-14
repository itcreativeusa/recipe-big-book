// Function to create a recipe card
const createRecipeCard = (recipe) => {
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("recipe-card");

  const recipeName = document.createElement("h2");
  recipeName.textContent = recipe.recipe_name;
  recipeCard.appendChild(recipeName);

  const cookTime = document.createElement("p");
  cookTime.textContent = "Cooking Time: " + recipe.cook_time + " minutes";
  recipeCard.appendChild(cookTime);

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients:";
  recipeCard.appendChild(ingredientsTitle);

  const ingredientsList = document.createElement("ul");
  recipe.ingredients.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    const ingredientLink = document.createElement("a");
    ingredientLink.textContent = ingredient.ingredient_name;
    ingredientLink.href = `/recipes?ingredient=${encodeURIComponent(
      ingredient.ingredient_name
    )}`;
    ingredientItem.appendChild(ingredientLink);
    ingredientsList.appendChild(ingredientItem);
  });
  recipeCard.appendChild(ingredientsList);

  const category = document.createElement("p");
  const categoryLink = document.createElement("a");
  category.textContent = "Category: ";
  categoryLink.textContent = recipe.category.category_name;
  categoryLink.href = `/recipes?categories=${encodeURIComponent(
    recipe.category.category_name
  )}`;
  category.appendChild(categoryLink);
  recipeCard.appendChild(category);

  // Create an image element for the recipe picture
  const recipeImage = document.createElement("img");
  recipeImage.src = `uploads/${recipe.picture}`; // Assuming the recipe object has a 'picture' property with the image URL
  recipeImage.alt = recipe.recipe_name;
  recipeImage.classList.add("recipe-photo");
  recipeCard.appendChild(recipeImage);

  // Recipe text
  const recipeText = document.createElement("p");
  recipeText.textContent = recipe.recipe_text;
  recipeCard.appendChild(recipeText);

  return recipeCard;
};

// Function to populate the list of recipes
const populateRecipesList = async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    category = params.get("categories");
    ingredient = params.get("ingredient");
    let response;
    if (category) {
      response = await fetch("/api/categories/" + category);
    } else if (ingredient) {
      response = await fetch("/api/ingredients/" + ingredient);
    } else {
      response = await fetch("/api/recipes");
    }
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const json = await response.json();
    let recipes;
    if (category || ingredient) {
      recipes = json.recipes;
    } else {
      recipes = json;
    }
    const recipeList = document.querySelector(".recipe-list");
    recipeList.innerHTML = ""; // Clear existing content
    recipes.forEach((recipe) => {
      const recipeCard = createRecipeCard(recipe);
      recipeList.appendChild(recipeCard);
    });
  } catch (error) {
    console.error("Error populating recipes:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Populate the list of recipes when the page loads
  populateRecipesList();
});
