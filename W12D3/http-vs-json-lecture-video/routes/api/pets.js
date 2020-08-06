const express = require('express');
const asyncHandler = require('express-async-handler');
const { all, one } = require('../../data/pets');
const router = express.Router();

/* GET /api/pets listing. */
router.get('/', asyncHandler(async function(_, res) {
  const data = await all();
  res.json(data);
}));

/* GET /api/pets/:id listing. */
router.get('/:id', asyncHandler(async function(req, res) {
  const data = await one(req.params.id);
  res.json(data);
}));

module.exports = router;
