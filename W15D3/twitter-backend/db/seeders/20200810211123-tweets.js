'use strict';

const db = require('../models');
const { User } = db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoUser = await User.findOne({
      where: { username: "DemoUser" }
    });
    await queryInterface.bulkInsert('Tweets', [
      { message: "Hello World! This is my first tweet!", userId: demoUser.id },
      { message: "Second tweet of the day!", userId: demoUser.id },
      { message: "Third tweet of the month!", userId: demoUser.id },
      { message: "Fourth tweet of the year!", userId: demoUser.id },
      { message: "Fifth tweet of the decade!", userId: demoUser.id },
      { message: "Sixth tweet of the century!", userId: demoUser.id },
    ], { fields: ['message', 'userId'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tweets', null, {});
  }
};
