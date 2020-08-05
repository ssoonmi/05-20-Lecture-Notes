'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PetOwners', [
      { ownerId: 1, petId: 1 },
      { ownerId: 2, petId: 2 },
      { ownerId: 3, petId: 3 },
      { ownerId: 3, petId: 4 },
      { ownerId: 4, petId: 5 },
      { ownerId: 1, petId: 6 },
      { ownerId: 1, petId: 2 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PetOwners');
  }
};
