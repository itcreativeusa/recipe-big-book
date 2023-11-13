// RecipeIngredient model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RecipeIngredient extends Model {}

RecipeIngredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "recipe",
        key: "id",
      },
    },

    ingredient_id: {
      type: DataTypes.INTEGER,
      references: { model: "ingredient", key: "id", unique: false },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe_ingredient",
  }
);

module.exports = RecipeIngredient;
