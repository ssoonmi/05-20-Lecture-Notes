'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetOwners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pets' }
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Owners' }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PetOwners');
  }
};
