"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          name: "Clean car",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Study data structures",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buy groceries",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};