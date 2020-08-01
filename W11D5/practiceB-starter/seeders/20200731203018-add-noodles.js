'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Noodles', [
      { name: "Linguini", stuffed: false },
      { name: "Fettucini", stuffed: false },
      { name: "Tortellini", stuffed: true },
      { name: "Ravioli", stuffed: true },
      { name: "Udon", stuffed: false },
      { name: "Ramen", stuffed: false },
    ], {
      fields: ['name', 'stuffed']
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Noodles', null, {});
  }
};
