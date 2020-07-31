const chai = require('chai');
const cheerio = require('cheerio');
const request = require('supertest');

const haveTag = require('./utils/have-tag-with-attribute');
const haveSelectWithOption = require('./utils/have-select-with-option');
const htmlCollector = require('./utils/html-collector');

const { app } = require('../app.js');
const { expect } = chai;

chai.use(haveTag);
chai.use(haveSelectWithOption);

describe('The main page', () => {
  function randomName() {
    return (Math.random() * 1000).toString();
  }

  function randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  let firstName = null;
  let lastName = null;
  let biography = null;
  let age = null;
  beforeEach(async () => {
    if (!app) return;

    firstName = randomName();
    lastName = randomName();
    biography = randomName();
    age = randomNumber();

    const getRes = await request(app).get("/new-person");
    const cookies = getRes.headers["set-cookie"];
    const $ = cheerio.load(getRes.text);

    const token = $("input[type='hidden'][name='_csrf']").attr("value");

    await request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send(`firstName=${firstName}`)
      .send(`lastName=${lastName}`)
      .send(`biography=${biography}`)
      .send(`age=${age}`)
      .send('hairColorId=1')
      .expect(302);
  });


  it('shows the values of a person recently added', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .get('/')
      .buffer()
      .parse(htmlCollector)
      .expect(res => {
        expect(res.body).to.contain(firstName, `Could not find the first name "${firstName}"`);
        expect(res.body).to.contain(lastName, `Could not find the last name "${lastName}"`);
        expect(res.body).to.contain(biography, `Could not find the biography "${biography}"`);
        expect(res.body).to.contain(age, `Could not find the age "${age}"`);
      })
      .expect(200, done);
  });
});
