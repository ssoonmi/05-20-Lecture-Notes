'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    biography: DataTypes.TEXT,
    hairColorId: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
    Person.belongsTo(models.HairColor, {
      foreignKey: 'hairColorId'
    });
  };
  return Person;
};