'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PetTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PetTypes');
  }
};
