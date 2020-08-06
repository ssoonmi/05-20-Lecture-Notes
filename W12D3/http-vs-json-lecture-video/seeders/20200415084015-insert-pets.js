'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pets', [
      { petTypeId: 1, age: 2, name: 'Cheeper' },
      { petTypeId: 2, age: 3, name: 'Mog' },
      { petTypeId: 3, age: 4, name: 'Fido' },
      { petTypeId: 4, age: 3, name: 'Mr. Sweaty Pants' },
      { petTypeId: 2, age: 4, name: 'Rupert' },
      { petTypeId: 3, age: 5, name: 'Red' }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pets');
  }
};
