const express = require('express');
const asyncHandler = require('express-async-handler');
const { Pet, PetType, Owner } = require('../models');
const router = express.Router();

/* GET owners listing. */
router.get('/', asyncHandler(function(_, res) {
  res.end('respond with a resource');
}));

module.exports = router;
