document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const recipeInput = document.getElementById("recipeInput");
  const recipeContainer = document.getElementById("recipeContainer");

  // Add the "No recipes found" message element
  const noRecipesMessage = document.getElementById("noRecipesMessage");

  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Get the value from the input field

    const userInput = recipeInput.value.trim();
    if (userInput === "") {
      // If the input is empty, clear
      recipeContainer.innerHTML = "";
      noRecipesMessage.style.display = "none"; // Hide the "No recipes found" message
      return;
    }

    const apiUrl = `/api/recipes/${encodeURIComponent(userInput)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Clear the recipeContainer before adding new recipes
      recipeContainer.innerHTML = "";

      if (data.length === 0) {
        // If no recipes found, show the "No recipes found" message
        noRecipesMessage.style.display = "block";
      } else {
        // Hide the "No recipes found" message if there are recipes
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
          // Add the "recipe-title" class to the h2 element
          recipeName.id = "recipe-title";

          // Set the picture
          // Use the correct image path here
          recipeImage.src = `uploads/${recipe.picture}`;
          // Provide an alternative text for the image
          recipeImage.alt = recipe.recipe_name;
          // Add the "recipe-photo" class to the image
          recipeImage.classList.add("recipe-photo");

          // Create a heading for ingredients
          const ingredientsTitle = document.createElement("h3");
          ingredientsTitle.textContent = "Ingredients";

          // Create clickable ingredients
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

          // Set category link
          categoryLink.textContent =
            "Category: " + recipe.category.category_name;
          categoryLink.href = `/api/categories/${encodeURIComponent(
            recipe.category.category_name
          )}`;

          // Append the elements to the recipeDiv
          recipeDiv.appendChild(recipeName);
          recipeDiv.appendChild(recipeImage); // Append the image to the recipeDiv
          recipeDiv.appendChild(recipeText);
          recipeDiv.appendChild(cookTime);
          recipeDiv.appendChild(ingredientsTitle);
          recipeDiv.appendChild(ingredientsList);
          recipeDiv.appendChild(categoryLink);

          // Append the recipeDiv to the recipeContainer
          recipeContainer.appendChild(recipeDiv);
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = "/api/recipes";
  const recipeListContainer = document.getElementById("recipeListContainer");
});
