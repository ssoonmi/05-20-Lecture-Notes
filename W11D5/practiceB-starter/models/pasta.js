'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pasta = sequelize.define('Pasta', {
    label: DataTypes.STRING,
    description: DataTypes.TEXT,
    taste: DataTypes.NUMERIC,
    sauceId: DataTypes.INTEGER,
    noodleId: DataTypes.INTEGER
  }, {});
  Pasta.associate = function(models) {
    // associations can be defined here
  };
  return Pasta;
};