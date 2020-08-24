const express = require('express');
const moment = require('moment');
const router = express.Router();
let repo;
try {
  repo = require('../../data-access-layer/recipes-repository');
} catch (e) {
  console.error(e);
  repo = { loadingDbError: `An error was raised "${e.message}". Check the console for details.` };
}

router.get('/', async (_, res) => {
  let error = repo.loadingDbError;
  let recipes;
  if (!error) {
    try {
      recipes = await repo.getTenNewestRecipes();
      recipes.forEach(recipe => {
        recipe.updated = moment(recipe.updatedAt).fromNow();
      });
    } catch (e) {
      error = `An error ocurred that reads "${e.message}". Check the console for more details.`;
    }
  }
  res.render('home.pug', {
    listTitle: 'Latest Recipes',
    error,
    recipes,
  });
});

module.exports = router;
