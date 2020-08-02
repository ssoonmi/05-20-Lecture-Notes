'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pasta = sequelize.define('Pasta', {
    label: DataTypes.STRING,
    description: DataTypes.TEXT,
    taste: DataTypes.FLOAT,
    noodleId: DataTypes.INTEGER,
    sauceId: DataTypes.INTEGER
  }, {});
  Pasta.associate = function(models) {
    // associations can be defined here
    Pasta.belongsTo(models.Noodle, { foreignKey: 'noodleId' });
    Pasta.belongsTo(models.Sauce, { foreignKey: 'sauceId' });
  };
  return Pasta;
};