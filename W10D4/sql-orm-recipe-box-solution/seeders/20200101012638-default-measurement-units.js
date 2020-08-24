'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MeasurementUnits', [
      { name: 'cups', createdAt: new Date(), updatedAt: new Date() },
      { name: 'fluid ounces', createdAt: new Date(), updatedAt: new Date() },
      { name: 'gallons', createdAt: new Date(), updatedAt: new Date() },
      { name: 'grams', createdAt: new Date(), updatedAt: new Date() },
      { name: 'liters', createdAt: new Date(), updatedAt: new Date() },
      { name: 'milliliters', createdAt: new Date(), updatedAt: new Date() },
      { name: 'ounces', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pinch', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pints', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pounds', createdAt: new Date(), updatedAt: new Date() },
      { name: 'quarts', createdAt: new Date(), updatedAt: new Date() },
      { name: 'tablespoons', createdAt: new Date(), updatedAt: new Date() },
      { name: 'teaspoons', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: 'cans', createdAt: new Date(), updatedAt: new Date() },
      { name: 'slices', createdAt: new Date(), updatedAt: new Date() },
      { name: 'splash', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MeasurementUnits', null, {});
  }
};
