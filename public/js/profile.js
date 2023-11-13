let formData;

document
  .getElementById("create-recipe-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get the form data
    formData = new FormData(event.target);
    console.log(formData.get("picture"));

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to create recipe");
      }
      const data = await response.json();
      console.log(data);

      // Show the success message
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";

      // Hide the success message after 3 seconds (adjust as needed)
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);

      // Clear the form after successful submission
      event.target.reset();

      // Update the recipes list
      populateUserRecipes();
    } catch (error) {
      console.error("Error:", error);
    }
  });

const populateUserRecipes = async () => {
  try {
    const response = await fetch("/api/users/recipes");
    if (!response.ok) {
      throw new Error("Failed to fetch user recipes");
    }
    const userRecipes = await response.json();
    console.log("Fetched user recipes:", userRecipes);

    // Function to display the user's recipes
    displayUserRecipes(userRecipes);
  } catch (error) {
    console.error("Error populating user recipes:", error);
  }
};
const displayUserRecipes = (recipes) => {
  const recipeListContainer = document.querySelector(".recipe-list-container");

  // Clear any existing content in the recipeListContainer
  recipeListContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    // Check if recipe.category is defined before accessing its properties
    const categoryName = recipe.category
      ? recipe.category.category_name
      : "N/A";

    // Extract the ingredient names from the array of ingredient objects
    const ingredientsList = recipe.ingredients
      ? recipe.ingredients
          .map((ingredient) => ingredient.ingredient_name)
          .join(", ")
      : "N/A";

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.setAttribute("data-recipe-id", recipe.id);

    recipeCard.innerHTML = `
      <h4>${recipe.recipe_name}</h4>
      <p>Cook Time: ${recipe.cook_time} minutes</p>
      <p>Category: ${categoryName}</p>
      <p>Instructions: ${recipe.recipe_text}</p>
      <p>Ingredients: ${ingredientsList}</p>
      <img src="uploads/${recipe.picture}" alt="${recipe.recipe_name}" class="recipe-photo"/>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-recipe-btn");
    deleteButton.addEventListener("click", () => {
      deleteRecipe(recipe.id);
    });

    recipeCard.appendChild(deleteButton);
    recipeListContainer.appendChild(recipeCard);
  });
};
// Function to add a new ingredient input field
const addIngredientField = () => {
  const ingredientsContainer = document.getElementById("ingredients-container");
  const ingredientRow = document.createElement("div");
  ingredientRow.classList.add("ingredient-row");
  ingredientRow.innerHTML = `
    <input type="text" name="ingredientNames[]" required />
    <button type="button" class="remove-ingredient-btn">Remove</button>
  `;
  ingredientsContainer.appendChild(ingredientRow);
};

// Function to remove an ingredient input field
const removeIngredientField = (event) => {
  if (event.target.classList.contains("remove-ingredient-btn")) {
    const ingredientRow = event.target.parentElement;
    const ingredientsContainer = document.getElementById(
      "ingredients-container"
    );
    ingredientsContainer.removeChild(ingredientRow);
  }
};

// Function to populate the categories dropdown
const populateCategoriesDropdown = async () => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();
    console.log("Fetched categories:", categories);

    const categorySelect = document.getElementById("category_id");
    categorySelect.innerHTML = "";
    // Add the "Select a category" option
    const defaultOption = document.createElement("option");
    defaultOption.value = ""; // Set an empty value for this option
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Select a category";
    categorySelect.appendChild(defaultOption);

    if (categories.length > 0) {
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.category_name;
        categorySelect.appendChild(option);
      });
    } else {
      // If there are no categories, display a "No categories available" option
      const noCategoryOption = document.createElement("option");
      noCategoryOption.disabled = true;
      noCategoryOption.textContent = "No categories available";
      categorySelect.appendChild(noCategoryOption);
    }
  } catch (error) {
    console.error("Error populating categories:", error);
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const response = await fetch(`/api/recipes/${recipeId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete recipe");
    }

    // Update the recipes list after successful deletion
    populateUserRecipes();
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the populateCategoriesDropdown function when the page is loaded
window.addEventListener("load", () => {
  populateCategoriesDropdown();
  populateUserRecipes(); // Fetch and display the user's recipes
});
document
  .getElementById("add-ingredient-btn")
  .addEventListener("click", addIngredientField);
// Event listener for the delete button
// Event listener for the remove button
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-ingredient-btn")) {
    const ingredientRow = event.target.parentElement;
    const ingredientsContainer = document.getElementById(
      "ingredients-container"
    );
    ingredientsContainer.removeChild(ingredientRow);
  }
});
