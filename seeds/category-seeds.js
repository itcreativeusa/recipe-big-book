const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Breakfast",
  },
  {
    category_name: "Lunch",
  },
  {
    category_name: "Dinner",
  },
  {
    category_name: "Sides",
  },
  {
    category_name: "Seafood",
  },
  {
    category_name: "Bread",
  },
  {
    category_name: "Rice",
  },
  {
    category_name: "Dessert",
  },
  {
    category_name: "Drinks",
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

module.exports = seedCategories;
