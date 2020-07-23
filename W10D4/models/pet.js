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
      as: 'Hoomans',
      through: models.PetOwner,
      otherKey: 'ownerId',
      foreignKey: 'petId'
    });
  };
  return Pet;
};