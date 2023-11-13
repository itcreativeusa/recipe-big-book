const router = require("express").Router();
const {
  Recipe,
  Category,
  Ingredient,
  RecipeIngredient,
  User,
} = require("../../models");

const multer = require("multer");
const slugify = require("slugify");
const { Op } = require("sequelize");

// Create a storage engine to specify where to save the uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Set the filename to be the original filename
    cb(null, file.originalname);
  },
});

// Create the multer instance with the specified storage engine
const upload = multer({ storage: storage });

// The `/api/Recipes` endpoint

// Get all Recipes
router.get("/", (req, res) => {
  Recipe.findAll({
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
      { model: User, as: "user" },
    ],
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

// Get one Recipe
router.get("/:name", (req, res) => {
  const searchWord = req.params.name;
  const searchWords = searchWord ? searchWord.split(" ") : [];

  const conditions = searchWords.map((word) => ({
    recipe_name: {
      [Op.like]: `%${word}%`,
    },
  }));

  Recipe.findAll({
    where: {
      [Op.and]: conditions,
    },
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
      { model: User, as: "user" },
    ],
  })
    .then((recipeData) => {
      res.json(recipeData);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});

// Create new Recipe
router.post("/", upload.single("picture"), (req, res) => {
  console.log("Received request:", req.body);
  console.log("Received file:", req.file);

  /* create post json example, do not delete.
    {
      picture: "uploads/image.jpg"
      recipe_name: "Butter Chicken",
      recipe_text: "Recipe instructions...",
      cook_time: 3,
      category_id: 1,
      user_id: 23,
      ingredientNames: ["Chicken", "Butter", "Salt", "Pepper"]
    }
  */
  const picture = req.file ? req.file.filename : null;
  const { recipe_name, recipe_text, cook_time, category_id, ingredientNames } =
    req.body;
  const slug = slugify(req.body.recipe_name, { lower: true });
  // Create the basic recipe record
  Recipe.create({
    picture: picture,
    recipe_name,
    recipe_text,
    cook_time,
    category_id,
    date_created: req.body.date_created,
    user_id: req.session.user_id, // Set the user_id to the logged-in user's ID
  })
    .then((recipe) => {
      // If there are ingredient names, find or create them and associate them with the recipe
      if (Array.isArray(ingredientNames) && ingredientNames.length) {
        const RecipeIngredientArr = ingredientNames.map((ingredientName) => {
          return Ingredient.findOrCreate({
            where: { ingredient_name: ingredientName },
          })
            .then(([ingredient]) => ingredient)
            .then((ingredient) => {
              return {
                recipe_id: recipe.id,
                ingredient_id: ingredient.id,
              };
            });
        });
        return Promise.all(RecipeIngredientArr).then((recipeIngredients) => {
          return RecipeIngredient.bulkCreate(recipeIngredients);
        });
      }
      return recipe;
    })
    .then((recipe) => {
      res.status(200).json({ message: "Recipe created", slug: slug });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update Recipe
router.put("/:name", upload.single("photo"), (req, res) => {
  const updatedRecipe = {
    recipe_name: req.body.recipe_name,
    recipe_text: req.body.recipe_text,
    cook_time: req.body.cook_time,
    category_id: req.body.category_id,
    picture: req.file ? req.file.filename : req.body.picture,
  };

  Recipe.update(updatedRecipe, {
    where: {
      recipe_name: req.params.name,
      user_id: req.session.user_id,
    },
  })
    .then(() => {
      return Recipe.findOne({
        where: {
          recipe_name: req.body.recipe_name,
        },
      });
    })
    .then((updatedRecipe) => {
      const slug = slugify(updatedRecipe.recipe_name, { lower: true });

      return updatedRecipe.update({ slug: slug });
    })
    .then(() => {
      res.json({ message: "Recipe updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete Recipe
router.delete("/:id", (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
    .then(() => {
      res.json({ message: "Recipe deleted" });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
