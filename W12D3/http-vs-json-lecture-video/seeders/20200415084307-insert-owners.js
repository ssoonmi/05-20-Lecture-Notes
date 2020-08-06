'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners', [
      { firstName: 'Human', lastName: 'One' },
      { firstName: 'Human', lastName: 'Two' },
      { firstName: 'Human', lastName: 'Three' },
      { firstName: 'Human', lastName: 'Four' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Owners');
  }
};
