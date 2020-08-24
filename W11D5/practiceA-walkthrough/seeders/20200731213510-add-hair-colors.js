'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HairColors', [
      { color: "Auburn", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Black", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Blonde", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Brown", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Other", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "Red", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
      { color: "White", createdAt: '2019-04-12', updatedAt: '2019-04-12' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HairColors', null, {});
  }
};
