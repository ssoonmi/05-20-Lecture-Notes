'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PetTypes', [
      { type: 'Bird' },
      { type: 'Cat'},
      { type: 'Dog' },
      { type: 'Gerbil' },
      { type: 'Hamster' },
      { type: 'Leopard' }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PetTypes');
  }
};
