const { expect } = require('chai');
const { migrationsConfig, seedsConfig, clearSeeds } = require('./test-utils');
const Runner = require('umzug');

describe('The Department model', () => {
  let clientError;
  let Department;
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

        ({ Department, Course } = require('../models'));
        if (!Department) {
          clientError = 'No Department model defined';
        }
      } catch (e) {
        clientError = e.message;
      }
    } else {
      clientError = 'No models directory. Have you initialized the project?';
    }
  });

  it('retrieves all departments', async () => {
    if (clientError) {
      expect.fail(clientError);
    }

    expect(await Department.findAll()).to.have.length(3);
  });

  it('retrieves department courses', async () => {
    if (clientError) {
      expect.fail(clientError);
    }
    if (!Course) {
      expect.fail('Course is not a defined model');
    }

    const departments = await Department.findAll({
      include: Course,
      order: ['name']
    });

    if (departments && departments.length && !departments[0].Courses) {
      expect.fail('Department ⭢ Courses is not configured.');
    }

    expect(departments[0].Courses.length).to.equal(2, `expected ${departments[0].name} to have 2 courses`);
    expect(departments[1].Courses.length).to.equal(3, `expected ${departments[1].name} to have 3 courses`);
    expect(departments[2].Courses.length).to.equal(2, `expected ${departments[2].name} to have 2 courses`);
  });
});
