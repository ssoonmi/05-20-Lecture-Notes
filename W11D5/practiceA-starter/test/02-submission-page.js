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
  let optionValue = null;
  let csrfError = null;
  let optionError = null;
  beforeEach(async () => {
    if (!app) return;

    const getRes = await request(app).get("/new-person");
    cookies = getRes.headers["set-cookie"];
    const $ = cheerio.load(getRes.text);

    try {
      const csrf = $("input[type='hidden'][name='_csrf']");
      if (csrf.length === 0) {
        csrfError = new Error("Could not find a _csrf field to use to submit.");
      }
      token = csrf.attr("value");
    } catch (e) {
      csrfError = new Error("Could not find a _csrf field to use to submit.");
    }

    try {
      const options = $('select[name="hairColorId"] option');
      const option = $(options[Math.floor(options.length * Math.random())]);
      optionValue = option.attr("value");

      if (!optionValue) {
        optionError = new Error(
          "Could not find a select dropdown with hairColorIds to use to submit."
        );
      }
    } catch (e) {
      optionError = new Error(
        "Could not find a select dropdown with hairColorIds to use to submit."
      );
    }
  });

  it('can accept a valid submission with firstName, lastName, and hairColorId and get redirected', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

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
    if (csrfError || optionError) { return done(csrfError || optionError); }

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
    if (csrfError || optionError) { return done(csrfError || optionError); }

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
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('lastName=Academy')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for a too-long firstName', done => {
    if (!app) { return done(Error('Cannot read "app" from app.js')); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send(`firstName=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`)
      .send('lastName=Academy')
      .send('biography=This+is+a+biography')
      .send('age=42')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for missing lastName data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for a too-long lastName', done => {
    if (!app) { return done(Error('Cannot read "app" from app.js')); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send(`lastName=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`)
      .send('biography=This+is+a+biography')
      .send('age=42')
      .send('hairColorId=1')
      .expect(500, done);
  });

  it('returns a 500 for missing hairColorId data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send(`_csrf=${token}`)
      .send('firstName=App')
      .send('lastName=Academy')
      .expect(500, done);
  });

  it('returns a 500 for unknown hairColorId data', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post("/new-person")
      .set("Cookie", cookies)
      .send(`_csrf=${token}`)
      .send("firstName=App")
      .send("lastName=Academy")
      .send("biography=This+is+a+biography")
      .send("age=42")
      .send(`hairColorId=0.123`)
      .expect(500, done);
  });

  it('returns a 403 for a missing CSRF token', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    if (csrfError || optionError) { return done(csrfError || optionError); }

    request(app)
      .post('/new-person')
      .set('Cookie', cookies)
      .send('firstName=App')
      .send('lastName=Academy')
      .expect(403, done);
  });
});