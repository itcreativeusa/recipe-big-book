document.addEventListener("DOMContentLoaded", async () => {
  const searchForm = document.getElementById("searchForm");
  const recipeInput = document.getElementById("recipeInput");
  const recipeContainer = document.getElementById("recipeContainer");
  const noRecipesMessage = document.getElementById("noRecipesMessage");
  const recipeListContainer = document.getElementById("recipeListContainer");

  // Event listener for the search form
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userInput = recipeInput.value.trim();
    if (userInput === "") {
      recipeContainer.innerHTML = "";
      noRecipesMessage.style.display = "none";
      return;
    }

    const apiUrl = `/api/recipes/${encodeURIComponent(userInput)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      recipeContainer.innerHTML = "";

      if (data.length === 0) {
        noRecipesMessage.style.display = "block";
      } else {
        noRecipesMessage.style.display = "none";
        data.forEach((recipe) => {
          // Create the elements
          const recipeDiv = document.createElement("div");
          const recipeName = document.createElement("h2");
          const recipeText = document.createElement("p");
          const cookTime = document.createElement("p");
          const ingredientsList = document.createElement("ul");
          const categoryLink = document.createElement("a");
          const recipeImage = document.createElement("img");

          // Set the content for each element
          recipeDiv.id = "recipe-container";
          recipeName.textContent = recipe.recipe_name;
          recipeText.textContent = recipe.recipe_text;
          cookTime.textContent = "Cook Time: " + recipe.cook_time + " minutes";
          recipeName.id = "recipe-title";

          recipeImage.src = `uploads/${recipe.picture}`;
          recipeImage.alt = recipe.recipe_name;
          recipeImage.classList.add("recipe-photo");

          const ingredientsTitle = document.createElement("h3");
          ingredientsTitle.textContent = "Ingredients";

          recipe.ingredients.forEach((ingredient) => {
            const ingredientItem = document.createElement("li");
            const ingredientLink = document.createElement("a");
            ingredientLink.textContent = ingredient.ingredient_name;
            ingredientLink.href = `/api/ingredients/${encodeURIComponent(
              ingredient.ingredient_name
            )}`;

            ingredientItem.appendChild(ingredientLink);
            ingredientsList.appendChild(ingredientItem);
          });

          categoryLink.textContent =
            "Category: " + recipe.category.category_name;
          categoryLink.href = `/api/categories/${encodeURIComponent(
            recipe.category.category_name
          )}`;

          recipeDiv.appendChild(recipeName);
          recipeDiv.appendChild(recipeImage);
          recipeDiv.appendChild(recipeText);
          recipeDiv.appendChild(cookTime);
          recipeDiv.appendChild(ingredientsTitle);
          recipeDiv.appendChild(ingredientsList);
          recipeDiv.appendChild(categoryLink);

          recipeContainer.appendChild(recipeDiv);
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

  // Event listener for the initial recipes on page load
  const initialApiUrl = "/api/recipes";

  try {
    const initialResponse = await fetch(initialApiUrl);
    const initialData = await initialResponse.json();

    recipeListContainer.innerHTML = "";

    initialData.forEach((recipe) => {
      // Create elements and append them to the container (similar to the existing code)
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
