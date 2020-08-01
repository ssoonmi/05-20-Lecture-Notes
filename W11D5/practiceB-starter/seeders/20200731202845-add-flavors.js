'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { Sauce, Flavor } = require('../models');

    await queryInterface.bulkInsert('Flavors', [
      { flavor: "Spicy" }, //1
      { flavor: "Savory" },//2
      { flavor: "Sweet" },//3
      { flavor: "Creamy" },//4
      { flavor: "Tangy" },//5
    ], {
      fields: ['flavor']
    });

    await queryInterface.bulkInsert('Sauces', [
      { name: "Alfredo", color: "white" },//1
      { name: "Bolognese", color: "red" },//2
      { name: "Cheesy Bechamel", color: "white" },//3
      { name: "Garlic Soy", color: "brown" },//4
      { name: "Brown Butter Sage", color: "brown" },//5
      { name: "Red Chili Broth", color: "red" },//6
    ], {
      fields: ['name', 'color']
    });

    const flavors = await Flavor.findAll({}, ['id']);
    const sauces = await Sauce.findAll({}, ['id']);

    return await queryInterface.bulkInsert('SauceFlavors', [
      { sauceId: sauces[0].id, flavorId: flavors[1].id },
      { sauceId: sauces[0].id, flavorId: flavors[3].id },
      { sauceId: sauces[1].id, flavorId: flavors[1].id },
      { sauceId: sauces[2].id, flavorId: flavors[3].id },
      { sauceId: sauces[3].id, flavorId: flavors[1].id },
      { sauceId: sauces[4].id, flavorId: flavors[3].id },
      { sauceId: sauces[4].id, flavorId: flavors[2].id },
      { sauceId: sauces[5].id, flavorId: flavors[0].id },
      { sauceId: sauces[5].id, flavorId: flavors[1].id },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SauceFlavors', null, {});
    await queryInterface.bulkDelete('Flavors', null, {});
    return await queryInterface.bulkDelete('Sauces', null, {});
  }
};
