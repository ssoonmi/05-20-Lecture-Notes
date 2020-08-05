'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    petTypeId: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Pet.associate = function(models) {
    Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId' });

    const columnMapping = {
      foreignKey: 'petId',
      through: 'PetOwners',
      otherKey: 'ownerId',
    };
    Pet.belongsToMany(models.Owner, columnMapping);
  };
  return Pet;
};
