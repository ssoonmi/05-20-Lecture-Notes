'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
    Owner.hasMany(models.PetOwner, { foreignKey: 'ownerId' });
    Owner.belongsToMany(models.Pet, {
      through: models.PetOwner,
      otherKey: 'petId',
      foreignKey: 'ownerId'
    });
  };
  Owner.createWithPets = async function(data) {
    const { Pet } = require('./index');
    
    const { firstName, lastName, petIds } = data;

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
    return owner;
  };
  Owner.getAllWithPets = async function () {
    const { Pet } = require('./index');
    const data = {};

    const owners = await Owner.findAll({
      include: [Pet],
      order: ['lastName']
    });

    const pets = await Pet.findAll();

    data.owners = owners;
    data.pets = pets;
    
    return data;
  }
  return Owner;
};