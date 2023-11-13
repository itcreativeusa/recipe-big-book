const router = require("express").Router();
const { Category, Recipe, Ingredient } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // Find all categories
  Category.findAll({
    // Include the Recipe model
    include: [{ model: Recipe, as: "recipes" }],
  })
    .then((categoryData) => {
      res.json(categoryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// get one Category
router.get("/:name", (req, res) => {
  // Find one category by its `name` value
  Category.findOne({
    where: { category_name: req.params.name },
    // Include the Recipe model
    include: [
      {
        model: Recipe,
        as: "recipes",
        include: [
          { model: Category, as: "category" },
          { model: Ingredient, as: "ingredients" },
        ],
      },
    ],
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "Category not found" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // Create a new category
  Category.create(req.body)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:name", (req, res) => {
  Category.update(req.body, {
    where: { category_name: req.params.name },
  })
    .then((category) => {
      res.json({ message: "Caregory updated" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // Delete a category by its `id` value
  Category.destroy({ where: { id: req.params.id } })
    .then((category) => {
      res.json({ message: "Caregory deleted" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
