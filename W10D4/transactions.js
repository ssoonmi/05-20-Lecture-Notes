const { Pet, Owner, PetType, sequelize } = require('./models/index');

async function main() {
  try {
    await sequelize.transaction(async (tx) => { // BEGIN TRANSACTION
      const fido = await Pet.findOne({
        where: { name: 'Fido' }
      }, { transaction: tx });

      fido.name = '';

      await fido.save({ transaction: tx });
    }); // COMMIT TRANSACTION
  } catch (err) {
  }

  await sequelize.close();
}

main();