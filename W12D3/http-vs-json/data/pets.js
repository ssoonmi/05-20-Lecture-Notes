const { Pet, PetType, Owner } = require('../models');

async function all() {
  const pets = await Pet.findAll({
    order: ['name'],
    include: [Owner]
  });
  return pets.map(pet => ({
    id: pet.id,
    name: pet.name,
    numberOfOwners: pet.Owners.length,
    href: `/pets/${pet.id}`
  }));
}

async function one(id) {
  return await Pet.findByPk(id, {
    include: [Owner, PetType]
  });
}

module.exports = {
  all,
  one
};
