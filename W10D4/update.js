const { PetType, sequelize } = require('./models/index');

async function updateElephant() {
  const petType = await PetType.findByPk(4); // or whatever id type of Elephant is

  petType.type = "Hamster" // set it to have a new type

  await pettype.save(); // save the changes

  sequelize.close();
}

updateElephant();