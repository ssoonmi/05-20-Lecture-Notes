const bodyParser = require('body-parser');
const express = require('express');
const moment = require('moment');
let recipeRepo;
let measurementRepo;
let loadingModuleError;
try {
  recipeRepo = require('../../data-access-layer/recipes-repository');
  measurementRepo = require('../../data-access-layer/measurement-units-repository');
} catch (e) {
  console.error(e);
  loadingModuleError = `An error was raised "${e.message}". Check the console for details.`;
}

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', async (req, res) => {
  let error = loadingModuleError;
  let recipes;
  try {
    const recipe = await recipeRepo.createNewRecipe(req.body.title);
    if (!recipe) {
      error = "Could not make a recipe. Perhaps you need to complete the createNewRecipe method in the recipes-repository.js file?";
    } else {
      return res.redirect('/recipes/' + recipe.id + '/edit');
    }
  } catch (e) {
    console.error(e);
    error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
  }
  res.render('recipe-starter.pug', {
    listTitle: 'Search Results',
    newRecipeError: error,
    recipes,
  });
});

router.get('/', async (req, res) => {
  let error = loadingModuleError;
  let recipes;
  try {
    recipes = await recipeRepo.searchRecipes(`%${req.query.term}%`);
  } catch (e) {
    console.error(e);
    error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
  }
  res.render('home.pug', {
    listTitle: 'Search Results',
    error,
    recipes,
  });
});

router.get('/new', async (req, res) => {
  res.render('recipe-starter.pug');
});

router.post('/:id/delete', async (req, res) => {
  await recipeRepo.deleteRecipe(req.params.id);
  res.redirect('/');
});

router.get('/:id/edit', async (req, res) => {
  let error = loadingModuleError;
  let recipe;
  let measures;
  if (!error) {
    try {
      recipe = await recipeRepo.getRecipeById(req.params.id);
      if (recipe) {
        recipe.created = moment(recipe.createdAt).format('MMM Do, YYYY');
        recipe.updated = moment(recipe.updatedAt).format('MMM Do, YYYY');
      }
      measures = await measurementRepo.getMeasurementUnits();
    } catch (e) {
      console.error(e);
      error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
  }
  res.render('recipe-editor.pug', {
    error,
    recipe,
    measures,
  });
});

router.get('/:id', async (req, res) => {
  let error = loadingModuleError;
  let recipe;
  if (!error) {
    try {
      recipe = await recipeRepo.getRecipeById(req.params.id);
      recipe.created = moment(recipe.createdAt).format('MMM Do, YYYY');
      recipe.updated = moment(recipe.updatedAt).format('MMM Do, YYYY');
    } catch (e) {
      error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
  }
  res.render('recipe-detail.pug', {
    error,
    recipe,
  });
});

module.exports = router;
