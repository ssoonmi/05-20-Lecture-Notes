'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetType = sequelize.define('PetType', {
    type: DataTypes.STRING
  }, {
    timestamps: false
  });
  PetType.associate = function(models) {
    // associations can be defined here
  };
  return PetType;
};
