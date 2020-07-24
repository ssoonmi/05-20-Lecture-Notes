const bodyParser = require('body-parser');
const express = require('express');
let instructionRepo;
let loadingModuleError;
try {
  instructionRepo = require('../../data-access-layer/instructions-repository');
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
  await instructionRepo.createNewInstruction(req.body.specification, recipeId);
  res.redirect('/recipes/' + req.body.recipeId + '/edit');
});

module.exports = router;
