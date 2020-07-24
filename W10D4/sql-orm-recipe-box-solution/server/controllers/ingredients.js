const bodyParser = require('body-parser');
const express = require('express');
let ingredientsRepo;
let loadingModuleError;
try {
  ingredientsRepo = require('../../data-access-layer/ingredients-repository');
} catch (e) {
  console.error(e);
  loadingModuleError = `An error was raised "${e.message}". Check the console for details.`;
}

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

function handleError(e, data, property, fileName) {
  console.error(e);
  data[property] = `An error occurred while running the SQL in ${fileName} that reads "${e.message}". Check the console for errors.`
}

router.post('/', async (req, res) => {
  const recipeId = Number.parseInt(req.body.recipeId);
  const { amount, foodStuff, measurementUnitId } = req.body;
  await ingredientsRepo.createNewIngredient(amount, recipeId, measurementUnitId, foodStuff);
  res.redirect('/recipes/' + req.body.recipeId + '/edit');
});

module.exports = router;
