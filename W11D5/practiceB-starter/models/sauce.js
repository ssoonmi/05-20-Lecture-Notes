'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sauce = sequelize.define('Sauce', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Sauce.associate = function(models) {
    // associations can be defined here
    Sauce.belongsToMany(models.Flavor, {
      through: models.SauceFlavor,
      otherKey: 'flavorId',
      foreignKey: 'sauceId'
    });
  };
  return Sauce;
};