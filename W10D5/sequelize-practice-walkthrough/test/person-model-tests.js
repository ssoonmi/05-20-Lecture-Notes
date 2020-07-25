const { expect } = require('chai');
const { migrationsConfig, seedsConfig, clearSeeds } = require('./test-utils');
const Runner = require('umzug');

describe('The Person model', () => {
  let clientError;
  let Course;
  let Person;
  before(async () => {
    if (migrationsConfig && seedsConfig) {
      const migrator = new Runner(migrationsConfig);
      const seeder = new Runner(seedsConfig);
      try {
        await seeder.down({ to: 0 });
        await migrator.down({ to: 0 });
        await migrator.up();
        await seeder.up();

        ({ Person, Course } = require('../models'));
        if (!Person) {
          clientError = 'No Person model defined';
        }
      } catch (e) {
        clientError = e.message;
      }
    } else {
      clientError = 'No models directory. Have you initialized the project?';
    }
  });

  it('retrieves all people', async () => {
    if (clientError) {
      expect.fail(clientError);
    }

    expect(await Person.findAll()).to.have.length(3);
  });

  it('retrieves peoples courses', async () => {
    if (clientError) {
      expect.fail(clientError);
    }
    if (!Course) {
      expect.fail('Course is not a defined model');
    }

    const people = await Person.findAll({
      include: Course,
      order: ['firstName']
    });

    if (people && people.length && !people[0].Courses) {
      expect.fail('Person ⭢ Courses is not configured.');
    }

    expect(people[0].Courses.length).to.equal(0, `Expected ${people[0].lastName} to have 0 courses`);
    expect(people[1].Courses.length).to.equal(4, `Expected ${people[1].lastName} to have 4 courses`);
    expect(people[2].Courses.length).to.equal(4, `Expected ${people[2].lastName} to have 4 courses`);
  });

  context("Queries", function () {
    it('can eagerly fetch a Person and associated Course data with a personId', async () => {
      const { lookupPersonAndCourses } = require("../queries/personLookup.js");
      
      const record = await lookupPersonAndCourses(3);
      expect(record.lastName).to.equal('Rosales');
      expect(record.Courses.length).to.equal(4);
    });

    it('can lookup a Person by lastName', async () => {
      const { lookupPersonByLastName } = require("../queries/personLookup.js");

      const records = await lookupPersonByLastName('Hays');
      expect(records[0].firstName).to.equal('Daniel');
      expect(records[0].Courses).to.equal(undefined); // not eagerly loaded
    });

    it("can lookup a Course's students by course name", async () => {
      const { lookupCoursesByPersonEmail } = require("../queries/personLookup.js");

      const records = await lookupCoursesByPersonEmail('ligula@velitduisemper.ca');
      expect(records.length).to.equal(4);
    });
  });
});
