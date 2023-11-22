document.addEventListener("DOMContentLoaded", async () => {
  const apiUrl = window.location.href;
  const recipeContainer = document.getElementById("recipeContainer");
  const categoryNameElement = document.getElementById("categoryName");
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Clear the recipeContainer before adding new recipes
    recipeContainer.innerHTML = "";

    if (data.length > 0) {
      // Set category name if available
      const category = data[0].category.category_name;
      categoryNameElement.textContent = `Category: ${category}`;
    }

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
      recipeName.textContent = recipe.recipe_name;
      recipeText.textContent = recipe.recipe_text;
      cookTime.textContent = "Cook Time: " + recipe.cook_time + " minutes";
      // Add the "recipe-title" class to the h2 element
      recipeName.id = "recipe-title";

      // Set the picture
      recipeImage.src = `/${recipe.picture}`;
      recipeImage.alt = recipe.recipe_name;
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
      categoryLink.textContent = "Category: " + recipe.category.category_name;
      categoryLink.href = `/api/categories/${encodeURIComponent(
        recipe.category.category_name
      )}`;

      // Append the elements to the recipeDiv
      recipeDiv.appendChild(recipeName);
      recipeDiv.appendChild(recipeImage);
      recipeDiv.appendChild(recipeText);
      recipeDiv.appendChild(cookTime);
      recipeDiv.appendChild(ingredientsTitle);
      recipeDiv.appendChild(ingredientsList);
      recipeDiv.appendChild(categoryLink);

      // Append the recipeDiv to the recipeContainer
      recipeContainer.appendChild(recipeDiv);
    });

    // Add slide-in animation
    recipeContainer.classList.add("slide-in-animation");
    setTimeout(() => {
      recipeContainer.classList.remove("slide-in-animation");
    }, 500);
  } catch (error) {
    console.error("Error:", error);
  }
});
