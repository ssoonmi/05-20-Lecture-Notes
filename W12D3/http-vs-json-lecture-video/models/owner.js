'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    timestamps: false
  });
  Owner.associate = function(models) {
    const columnMapping = {
      foreignKey: 'ownerId',
      through: 'PetOwners',
      otherKey: 'petId',
    };
    Owner.belongsToMany(models.Pet, columnMapping);
  };
  return Owner;
};
