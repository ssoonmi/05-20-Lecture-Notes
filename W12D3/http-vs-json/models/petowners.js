'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetOwners = sequelize.define('PetOwners', {
    petId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  PetOwners.associate = function(models) {
    // associations can be defined here
  };
  return PetOwners;
};
