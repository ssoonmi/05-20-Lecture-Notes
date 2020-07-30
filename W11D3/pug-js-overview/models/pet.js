'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    petTypeId: DataTypes.INTEGER,
    age: {
      type: DataTypes.INTEGER,
      validate: {

      }
    }
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
    Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId' });

    // pet.getPetType()
    // `
    // select "PetTypes".* from "Pets" join "PetTypes" on ... where "Pets".id = id;
    // `
    Pet.hasMany(models.PetOwner, { foreignKey: 'petId' });
    Pet.belongsToMany(models.Owner, {
      through: models.PetOwner,
      otherKey: 'ownerId',
      foreignKey: 'petId'
    });
  };
  Pet.createWithOwners = async function (data) {
    const { Owner } = require('./index');
    const { name, age, typeId, ownerIds } = data;
    const pet = await Pet.create({
      name,
      age,
      petTypeId: typeId
    });

    if (ownerIds.length) {
      const arrOwnerIds = ownerIds.split(',');
      const owners = await Owner.findAll({
        where: { id: arrOwnerIds }
      });
      await pet.setOwners(owners);
    }
  };
  // Pet.prototype.getAllOwners = async function() {
  //   return await this.getOwners();
  // };
  Pet.getAllWithPetTypesAndOwners = async function() {
    const { Owner, PetType } = require('./index');
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

    return data;
  };
  return Pet;
};