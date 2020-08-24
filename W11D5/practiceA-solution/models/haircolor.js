'use strict';
module.exports = (sequelize, DataTypes) => {
  const HairColor = sequelize.define('HairColor', {
    color: DataTypes.STRING
  }, {
    timestamps: false
  });
  HairColor.associate = function(models) {
    // associations can be defined here
  };
  return HairColor;
};
