const { Pet, Owner, PetType, PetOwner, sequelize } = require('./models/index');

async function findFidoAndOwners() { // find by primary key
  // const fido = await Pet.findOne({
  //   where: { name: 'Fido' },
  //   include: [PetType, 'Hoomans']
  // });
  // console.log(fido.toJSON().Hoomans[0].PetOwner);

  const owner = await Owner.findOne({
    where: { firstName: 'Peter'},
    include: {
      model: Pet,
      include: {
        model: Owner,
        as: "Hoomans",
        include: PetOwner
      }
    }
  });
  console.log(owner.toJSON().Pets[0]);
}

async function execute() {
  try {

    await findFidoAndOwners();

  } catch (e) {
    console.log(e);
  }

  sequelize.close();
}

execute();