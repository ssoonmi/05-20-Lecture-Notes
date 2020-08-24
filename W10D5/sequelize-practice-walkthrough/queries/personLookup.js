const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // Find person and associated courses by `personId`

  // input: personId
  // starting point: person
  // ending point: course
  // output: person and courses

  return await Person.findByPk(personId, {
    include: Course
  });
};

async function lookupPersonByLastName(lastName) {
  // Find people by `lastName`

  // input: lastName of person
  // output: array of people with lastname

  return await Person.findAll({
    where: {
      lastName
    }
  });
};

async function lookupCoursesByPersonEmail(email) {
  // Find person by `email` and return associated courses

  // input: email of single person
  // starting: person
  // ending: courses
  // output: courses

  const person = await Person.findOne({
    where: {
      email
    },
    include: Course
  });
  return person.Courses
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
