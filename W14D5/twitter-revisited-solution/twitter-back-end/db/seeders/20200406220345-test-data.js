"use strict";

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    return queryInterface.bulkInsert(
      "Tweets",
      [
        {
          message: faker.company.catchPhrase(),
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: users[0].id,
        },
        {
          message: faker.company.catchPhrase(),
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: users[0].id,
        },
        {
          message: faker.company.catchPhrase(),
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: users[1].id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tweets", null, {});
    return queryInterface.bulkDelete("Users", null, {});
  },
};
