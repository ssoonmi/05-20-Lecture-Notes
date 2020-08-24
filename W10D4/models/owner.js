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
  return Owner;
};