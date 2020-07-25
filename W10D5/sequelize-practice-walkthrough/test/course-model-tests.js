const { expect } = require('chai');
const { migrationsConfig, seedsConfig, clearSeeds } = require('./test-utils');
const Runner = require('umzug');

describe('The Course model', () => {
  let clientError;
  let Department;
  let Campus;
  let Person;
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

        ({ Course, Course, Campus, Person, Department } = require('../models'));
        if (!Course) {
          clientError = 'No Course model defined';
        }
      } catch (e) {
        clientError = e.message;
      }
    } else {
      clientError = 'No models directory. Have you initialized the project?';
    }
  });

  it('retrieves all courses', async () => {
    if (clientError) {
      expect.fail(clientError);
    }

    expect(await Course.findAll()).to.have.length(7);
  });

  it('retrieves campuses, departments, and people', async () => {
    if (clientError) {
      expect.fail(clientError);
    }
    if (!Department) {
      expect.fail('Department is not a defined model');
    }
    if (!Person) {
      expect.fail('Person is not a defined model');
    }
    if (!Campus) {
      expect.fail('Campus is not a defined model');
    }

    const courses = await Course.findAll({
      include: [Person, Campus, Department],
      order: ['name']
    });

    if (courses && courses.length && !courses[0].Department) {
      expect.fail('Course ⭢ Department is not configured.');
    }
    if (courses && courses.length && !courses[0].Campus) {
      expect.fail('Course ⭢ Campus is not configured.');
    }
    if (courses && courses.length && !courses[0].People) {
      expect.fail('Course ⭢ People is not configured.');
    }


    const values = [
      [1, 'Mathematics', 'Bangor'],
      [2, 'Music', 'Valdivia'],
      [0, 'Mathematics', 'Bangor'],
      [0, 'Mathematics', 'Filacciano'],
      [2, 'Economics', 'Bangor'],
      [2, 'Music', 'Valdivia'],
      [1, 'Economics', 'Bangor'],
    ];

    let message;
    for (let i = 0; i < values.length; i += 1) {
      message = `for ${courses[i].name} expected ${values[i][0]} people`;
      expect(courses[i].People.length).to.equal(values[i][0], message);

      message = `for ${courses[i].name} expected department ${values[i][1]}`;
      expect(courses[i].Department).to.have.property('name', values[i][1], message);

      message = `for ${courses[i].name} expected campus ${values[i][2]}`;
      expect(courses[i].Campus).to.have.property('name', values[i][2], message);
    }
  });
});
