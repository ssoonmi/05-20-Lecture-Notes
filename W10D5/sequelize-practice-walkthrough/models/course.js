'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.belongsToMany(models.Person, {
      through: models.Enrollment,
      foreignKey: 'courseId',
      otherKey: 'personId'
    });
    Course.belongsTo(models.Campus, {
      foreignKey: 'campusId'
    });
    Course.belongsTo(models.Department, {
      foreignKey: 'departmentId'
    })
  };
  return Course;
};