'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('PetTypes', [
      { type: 'Bird' },
      { type: 'Cat' },
      { type: 'Dog' },
      { type: 'Elephant' } // can do this without createdAt and updatedAt because of the Sequelize.NOW defaultValue
    ], { fields: ['type'] });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('PetTypes', {
      type: ['Bird', 'Cat', 'Dog', 'Elephant']
    }, {});
  }
};
