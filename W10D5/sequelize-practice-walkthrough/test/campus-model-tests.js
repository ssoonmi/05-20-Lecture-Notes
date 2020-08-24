const { expect } = require('chai');
const { migrationsConfig, seedsConfig, clearSeeds } = require('./test-utils');
const Runner = require('umzug');

describe('The Campus model', () => {
  let clientError;
  let Campus;
  let Course;
  before(async () => {
    if (migrationsConfig && seedsConfig) {
      const migrator = new Runner(migrationsConfig);
      const seeder = new Runner(seedsConfig);
      try {
        await seeder.down({ to: 0 });
        await migrator.down({ to: 0 });
        await migrator.up();
        await seeder.up();

        ({ Campus, Course } = require('../models'));
        if (!Campus) {
          clientError = 'No Campus model defined';
        }
      } catch (e) {
        console.log(e);
        clientError = e.message;
      }
    } else {
      clientError = 'No models directory. Have you initialized the project?';
    }
  });

  it('retrieves all campuses', async () => {
    if (clientError) {
      expect.fail(clientError);
    }

    expect(await Campus.findAll()).to.have.length(4);
  });

  it('retrieves campus courses', async () => {
    if (clientError) {
      expect.fail(clientError);
    }
    if (!Course) {
      expect.fail('Course is not a defined model');
    }

    const campuses = await Campus.findAll({
      include: Course,
      order: ['name']
    });

    if (campuses && campuses.length && !campuses[0].Courses) {
      expect.fail('Campus ⭢ Courses is not configured.');
    }

    expect(campuses[0].Courses.length).to.equal(4, `Campus ${campuses[0].name} expected to have 4 courses.`);
    expect(campuses[1].Courses.length).to.equal(0, `Campus ${campuses[1].name} expected to have 0 courses.`);
    expect(campuses[2].Courses.length).to.equal(1, `Campus ${campuses[2].name} expected to have 1 courses.`);
    expect(campuses[3].Courses.length).to.equal(2, `Campus ${campuses[3].name} expected to have 2 courses.`);
  });
});
