'use strict';
module.exports = (sequelize, DataTypes) => {
  const HairColor = sequelize.define('HairColor', {
    color: DataTypes.STRING
  }, {});
  HairColor.associate = function(models) {
    // associations can be defined here
    HairColor.hasMany(models.Person, {
      foreignKey: 'hairColorId'
    });
  };
  return HairColor;
};