'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: DataTypes.STRING
  }, {});
  MeasurementUnit.associate = function(models) {
    MeasurementUnit.hasMany(models.Ingredient, { foreignKey: 'measurementUnitId' });
  };
  return MeasurementUnit;
};
