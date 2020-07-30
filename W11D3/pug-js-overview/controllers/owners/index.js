const express = require('express');
const { Pet, Owner, PetType } = require('../../models');

const ownerRouter = express.Router();

ownerRouter.post('/', async (req, res) => {
  await Owner.createWithPets(req.body);
  res.redirect('/owners');
});

ownerRouter.get('/', async (req, res) => {
  const data = await Owner.getAllWithPets();
  res.render('owners', data);
});

module.exports = ownerRouter;