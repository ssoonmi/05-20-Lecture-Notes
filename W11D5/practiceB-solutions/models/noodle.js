'use strict';
module.exports = (sequelize, DataTypes) => {
  const Noodle = sequelize.define('Noodle', {
    name: DataTypes.STRING,
    stuffed: DataTypes.BOOLEAN
  }, {});
  Noodle.associate = function(models) {
    // associations can be defined here
    Noodle.hasMany(models.Pasta, { foreignKey: 'noodleId' });
  };
  return Noodle;
};