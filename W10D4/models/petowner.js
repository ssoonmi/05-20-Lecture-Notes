'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetOwner = sequelize.define('PetOwner', {
    petId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  PetOwner.associate = function(models) {
    // associations can be defined here
    PetOwner.belongsTo(models.Pet, { foreignKey: 'petId' });
    PetOwner.belongsTo(models.Owner, { foreignKey: 'ownerId' });
  };
  return PetOwner;
};