const { PetType, sequelize } = require('./models/index');

async function deleteBirdAndCat() {
  await PetType.destroy({
    where: {
      type: ['Bird', 'Cat']
    }
  });

  sequelize.close();
}

deleteBirdAndCat();