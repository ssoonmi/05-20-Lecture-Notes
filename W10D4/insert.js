const { Pet, Owner, sequelize } = require('./models/index');

async function insertNewPetUsingBuild() {
  const fido = Pet.build({
    name: 'Fido',
    age: 4,
    petTypeId: 3 // or whatever id PetType with "Dog" type is
  });

  await fido.save();

  const zaphox = Owner.build({
    firstName: "Zaphox",
    lastName: "Beeblebrox"
  });

  await zaphox.save();

  await zaphox.addPet(fido);
  // await fido.addOwner(zaphox);

  sequelize.close();
}

// async function insertNewPetUsingCreate() {
//   const fido = await Pet.create({
//     name: 'Fido',
//     age: 4,
//     petTypeId: 3 // or whatever id PetType with "Dog" type is
//   });

//   const zaphox = await Owner.create({
//     firstName: "Zaphox",
//     lastName: "Beeblebrox"
//   });

//   await zaphox.addPet(fido);
//   await fido.addOwner(zaphox);

//   sequelize.close();
// }

insertNewPetUsingBuild();
// insertNewPetUsingCreate();