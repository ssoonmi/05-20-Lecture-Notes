'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campuses', [
      { name: 'Valdivia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bangor', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chatillon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Filacciano', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campuses', null, {});
  }
};
