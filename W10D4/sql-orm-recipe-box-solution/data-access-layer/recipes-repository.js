const { Op } = require('sequelize');
let Recipe, Instruction, Ingredient, MeasurementUnit;
let moduleError;

try {
  const db = require('../models');
  ({ Recipe, Instruction, Ingredient, MeasurementUnit } = db);
  if (Recipe === undefined) {
    moduleError = 'It looks like you need to generate the Recipe model.';
  }
} catch (e) {
  console.error(e);
  if (e.message.includes('Cannot find module')) {
    moduleError = 'It looks like you need initialize your project.';
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/



async function getTenNewestRecipes() {
  // Use the findAll method of the Recipe object to return the recipes.
  // Use the options for findAll to limit the number of objects and order it
  //   appropriately
  //
  // Docs: https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
  return await Recipe.findAll({
    limit: 10,
    order: [['updatedAt', 'DESC']]
  });
}

async function getRecipeById(id) {
  // Use the findByPk method of the Recipe object to return the recipe.
  // Use nested eager loading to load the associated instructions, ingredients,
  // and measurement units.
  //
  // Docs: https://sequelize.org/v5/manual/models-usage.html#eager-loading
  //       https://sequelize.org/v5/manual/models-usage.html#nested-eager-loading
  return await Recipe.findByPk(id, {
    include: [
      Instruction,
      {
        model: Ingredient,
        include: [MeasurementUnit]
      }
    ]
  });
}

async function deleteRecipe(id) {
  // Use the findByPk method of the Recipe object to get the object and, then,
  // destroy it.
  //
  // Docs: https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-destroy
  const recipe = await Recipe.findByPk(id);
  await recipe.destroy();
}

async function createNewRecipe(title) {
  // Use the create method of the Recipe object to create a new object and
  // return it.
  //
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances
  return await Recipe.create({ title });
}

async function searchRecipes(term) {
  // Use the findAll method of the Recipe object to search for recipes with the
  // given term in its title
  //
  // Docs: https://sequelize.org/v5/manual/querying.html
  return await Recipe.findAll({ where: { title: { [Op.like]: term } } });
}




/* Don't change code below this line ******************************************/
module.exports = {
  createNewRecipe,
  deleteRecipe,
  getRecipeById,
  getTenNewestRecipes,
  searchRecipes,
  loadingDbError: moduleError,
};
