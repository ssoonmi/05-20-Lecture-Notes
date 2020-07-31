'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HairColors', [
      { color: 'Auburn' },
      { color: 'Black' },
      { color: 'Blonde' },
      { color: 'Brown' },
      { color: 'Other' },
      { color: 'Red' },
      { color: 'White' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HairColors');
  }
};
