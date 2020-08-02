'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sauce = sequelize.define('Sauce', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Sauce.associate = function(models) {
    // associations can be defined here
    Sauce.hasMany(models.Pasta, { foreignKey: 'sauceId' });
  };
  return Sauce;
};