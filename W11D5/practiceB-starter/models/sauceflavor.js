'use strict';
module.exports = (sequelize, DataTypes) => {
  const SauceFlavor = sequelize.define('SauceFlavor', {
    sauceId: DataTypes.INTEGER,
    flavorId: DataTypes.INTEGER
  }, {});
  SauceFlavor.associate = function(models) {
    // associations can be defined here
    SauceFlavor.belongsTo(models.Sauce, { foreignKey: 'sauceId' });
    SauceFlavor.belongsTo(models.Flavor, { foreignKey: 'flavorId' });
  };
  return SauceFlavor;
};