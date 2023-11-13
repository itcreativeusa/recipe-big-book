const router = require("express").Router();
const {
  Category,
  Ingredient,
  Recipe,
  RecipeIngredient,
} = require("../../models");

// The `/api/ingredients` endpoint

router.get("/", (req, res) => {
  // find all Ingredients
  Ingredient.findAll({
    // include the associated Recipe data
    include: [
      {
        model: Recipe,
        through: RecipeIngredient,
        foreignKey: "ingredient_id",
      },
    ],
  }).then((ingredient) => {
    res.json(ingredient);
  });
});
// get one Ingredient
router.get("/:name", (req, res) => {
  // find a single ingredient by its name
  Ingredient.findOne({
    where: { ingredient_name: req.params.name },
    // include the associated Recipe data
    include: [
      {
        model: Recipe,
        through: RecipeIngredient,
        foreignKey: "ingredient_id",
        include: [
          { model: Category, as: "category" },
          { model: Ingredient, as: "ingredients" },
        ],
      },
    ],
  })
    .then((ingredient) => {
      res.json(ingredient);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// create a new ingredient
router.post("/", (req, res) => {
  Ingredient.create(req.body)
    .then((ingredient) => {
      // log the result of the create operation
      res.json({ message: "Ingredient created" });
    })
    .catch((err) => res.json(err));
});

// update an ingredient by its name value
router.put("/:name", (req, res) => {
  Ingredient.update(req.body, {
    where: { ingredient_name: req.params.name },
  })
    .then((ingredientData) => {
      console.log(ingredientData);
      // Log the result of the update operation
      res.json({ message: "Ingredient updated" });
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete one ingredient by its `id` value
  Ingredient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      // log the result of the delete operation
      res.json({ message: "Ingredient deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
module.exports = router;
