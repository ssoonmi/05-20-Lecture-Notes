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

describe('The submission page', () => {
  let token = null;
  let cookies = null;
  beforeEach(async () => {
    if (!app) return;

    const getRes = await request(app).get("/new-person");
    cookies = getRes.headers["set-cookie"];
    const $ = cheerio.load(getRes.text);

    token = $("input[type='hidden'][name='_csrf']").attr("value");
  });

  it('can accept a valid submission with firstName, lastName, and hairColorId and get redirected', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('lastName=Academy')
      .send('hairColorId=1')
      .expect(302, done);
  });

  it('can accept a valid submission with firstName, lastName, biography, and hairColorId and get redirected', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('lastName=Academy')
      .send('biography=This+is+a+biography')
      .send('hairColorId=1')
      .expect(302, done);
  });

  it('can accept a valid submission with firstName, lastName, biography, age, and hairColorId and get redirected', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('lastName=Academy')
      .send('biography=This+is+a+biography')
      .send('age=42')
      .send('hairColorId=1')
      .expect(302, done);
  });

  it('returns a 500 for missing firstName data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('lastName=Academy')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for missing lastName data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for missing hairColorId data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('lastName=Academy')
      .expect(500, done);
  });

  it('returns a 403 for a missing CSRF token', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send('firstName=App')
      .send('lastName=Academy')
      .expect(403, done);
  });
});