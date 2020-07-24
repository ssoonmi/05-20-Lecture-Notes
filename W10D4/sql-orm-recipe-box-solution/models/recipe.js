'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
    Recipe.hasMany(models.Ingredient, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };
  return Recipe;
};
