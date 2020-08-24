try {
  const { resolve } = require('path');
  const models = require('../models');

  exports.close = () => models.sequelize.close();

  exports.clearSeeds = async () => {
    try {
      await models.sequelize.query('DELETE FROM "SequelizeData"');
    } catch (e) {
      console.error(e);
    }
  };

  exports.migrationsConfig = {
    storage: "sequelize",
    storageOptions: {
      sequelize: models.sequelize
    },
    migrations: {
      params: [
        models.sequelize.getQueryInterface(),
        models.sequelize.constructor
      ],
      path: resolve(__dirname, '..', 'migrations'),
      pattern: /\.js$/
    }
  };

  exports.seedsConfig = {
    storage: "sequelize",
    storageOptions: {
      sequelize: models.sequelize,
      modelName: 'SequelizeData'
    },
    migrations: {
      params: [
        models.sequelize.getQueryInterface(),
        models.sequelize.constructor
      ],
      path: resolve(__dirname, '..', 'seeders'),
      pattern: /\.js$/
    }
  }

} catch (e) {
  console.error(e);
}
