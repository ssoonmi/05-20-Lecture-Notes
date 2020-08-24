const express = require('express');
const app = express();
const { Pet, Owner, PetType } = require('./models');

app.set('view engine', 'pug');

app.use(require('morgan')('dev'))

app.use(express.urlencoded({ extended: true })); // any type of value (not just string and array)

app.post('/pets', async (req, res) => {
  // const { body: data } = req;
  // the above destructuring is the same as below
  // const data = body.req;

  // how we expect the form to be submitted:
  // req.body = {
  //   name: dkfjdkf,
  //   age: 1324,
  //   typeId: 3,
  //   ownerIds: [2, 3]
  // }
  console.log(req.body);

  const { name, age, typeId, ownerIds } = req.body;
  const pet = await Pet.create({
    name,
    age,
    petTypeId: typeId
  });
  if (ownerIds) { // if not undefined
    const arrOwnerIds = ownerIds.split(',');
    const owners = await Owner.findAll({
      where: { id: arrOwnerIds }
    });
    await pet.setOwners(owners);
  }

  res.redirect('/pets');
});

app.post('/owners', async (req, res) => {
  const { firstName, lastName, petIds } = req.body;
  const owner = await Owner.create({
    firstName,
    lastName
  });
  if (petIds) {
    const arrPetIds = petIds.split(',');
    const pets = await Pet.findAll({
      where: { id: arrPetIds }
    });
    await owner.setPets(pets);
  }

  res.redirect('/owners');
});

app.get('/pets', async (req, res) => {
  const data = {};

  const pets = await Pet.findAll({
    include: [PetType, Owner],
    order: ['name']
  });

  const petTypes = await PetType.findAll();
  const owners = await Owner.findAll();

  data.pets = pets;
  data.petTypes = petTypes;
  data.owners = owners;

  res.render('pets', data);
});

app.get('/owners', async (req, res) => {
  const data = {};

  const owners = await Owner.findAll({
    include: [Pet],
    order: ['lastName']
  });

  const pets = await Pet.findAll();

  data.owners = owners;
  data.pets = pets;

  res.render('owners', data);
});

app.get('/pettypes', async (req, res) => {
  const petTypes = await PetType.findAll({
    include: Pet
  });

  res.render('pettypes', { petTypes });
});

const port = 8080;

app.listen(port, () => console.log('Server is listening on port', port));