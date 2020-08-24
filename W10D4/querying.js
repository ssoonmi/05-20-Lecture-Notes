const { Pet, Owner, PetType, sequelize } = require('./models/index');

async function findByPk() { // find by primary key
  // return an instance of the model
  const firstPetType = await PetType.findByPk(1);
  console.log('firstPetType', firstPetType);
}


async function findAll() {
  // returning an array of instances
  const pets = await Pet.findAll({
    where: { id: 1 }
  });
  // pets[0];
  console.log('Pets', pets.map(pet => pet.toJSON()));
}

async function findOne() {
  // returns a single instance
  const fido = await Pet.findOne({
    where: { name: 'Fido' }
  });
  `
  select * from "Pets" where name NOT IN ('Fido')
  `
  console.log('Fido', fido.toJSON())

  const owner2 = await Owner.findCreateFind({
    where: {
      firstName: 'Peter',
      lastName: 'Knipp'
    }
  });

  await fido.setHoomans([owner2[0]]);
  // await fido.addHoomans([owner2[0]]);

  console.log('Fido Owners', await fido.getHoomans().map(owner => owner.toJSON()));
}

async function findCreateFind() {
  // returns an array of instances
  const petTypes = await PetType.findCreateFind({
    where: {
      type: 'Bird'
    }
  });
  console.log('PetType', petTypes.map(pettype => pettype.toJSON()));
}


async function execute() {
  try {
    // await findByPk();
  
    // await findAll();
  
    await findOne();
  
    // await findCreateFind();
  } catch (e) {
    console.log(e);
  }

  sequelize.close();
}

execute();