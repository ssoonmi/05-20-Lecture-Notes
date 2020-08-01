'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flavor = sequelize.define('Flavor', {
    flavor: DataTypes.STRING
  }, {});
  Flavor.associate = function(models) {
    // associations can be defined here
    Flavor.belongsToMany(models.Sauce, {
      through: models.SauceFlavor,
      foreignKey: 'flavorId',
      otherKey: 'sauceId'
    })
  };
  return Flavor;
};