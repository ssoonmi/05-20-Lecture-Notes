'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};