'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetType = sequelize.define('PetType', {
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  PetType.associate = function(models) {
    // associations can be defined here
    PetType.hasMany(models.Pet, { foreignKey: 'petTypeId' });
  };
  // PetType.findByPk = function(id) {
  //   // returns only one
  //   // `
  //   // SELECT * FROM "PetTypes" WHERE id = id;
  //   // `
  //   // => PetType instance
  // }
  return PetType;
};