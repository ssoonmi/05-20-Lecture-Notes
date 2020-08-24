'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sauces', [
    { name: 'Alfredo', color: 'white' },
    { name: 'Bolognese', color: 'red' },
    { name: 'Cheesy Bechamel', color: 'white' },
    { name: 'Garlic Soy', color: 'brown' },
    { name: 'Brown Butter Sage', color: 'brown' },
    { name: 'Red Chili Broth', color: 'red' },
    ], { fields: ['name', 'color'] });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sauces', null, {});
  }
};
