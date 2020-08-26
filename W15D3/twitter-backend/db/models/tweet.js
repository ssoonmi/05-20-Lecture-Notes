'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tweet.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Tweet.init(
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // save, update, create
          len: {
            args: [1, 280],
            msg: "Message must be between 1 and 280 characters.",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "Tweet",
    }
  );
  return Tweet;
};