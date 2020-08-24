const express = require('express');

const petRouter = express.Router();

petRouter.post('/', async (req, res) => {
  await Pet.createWithOwners(req.body);
  res.redirect('/pets');
});


petRouter.get('/', async (req, res) => {
  const data = await Pet.getAllWithPetTypesAndOwners();
  res.render('pets', data);
});

module.exports = petRouter;