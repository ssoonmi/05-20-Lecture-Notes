const express = require('express');
const asyncHandler = require('express-async-handler');
const { all, one } = require('../data/pets');
const router = express.Router();

/* GET /pets listing. */
router.get('/', asyncHandler(async function(_, res) {
  const pets = await all();
  res.render('pets/index', { pets });
}));

// localhost:3000/pets/:id
/* GET /pets/id listing. */
router.get('/:id', asyncHandler(async function(req, res) {
  const pet = await one(req.params.id);
  res.render('pets/detail', { pet })
}));

// localhost:3000/pets/:id/owners
router.get('/:id/owners', asyncHandler(async function(req, res) {
  // show owners for a pet
}));

module.exports = router;
