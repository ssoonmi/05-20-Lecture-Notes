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
  let csrfError = null;
  let optionError = null;
  let optionText = null;
  let createError = null;
  let pageContent = null;

  function findNamedRow() {
    const rows = pageContent.split(/<\/?tr>/g);
    let namedRow = "";

    const nameRegex = new RegExp(`<td[^>]*>\s*${firstName}\s*</td>`);
    for (let row of rows) {
      if (nameRegex.test(row)) {
        namedRow = row;
        break;
      }
    }
    return namedRow;
  }

  before(async () => {
    if (!app) return;

    firstName = randomName();
    lastName = randomName();
    biography = randomName();
    age = randomNumber();

    const getRes = await request(app).get("/new-person");
    const cookies = getRes.headers["set-cookie"];
    const $ = cheerio.load(getRes.text);

    try {
      const csrf = $("input[type='hidden'][name='_csrf']");
      if (csrf.length === 0) {
        csrfError = new Error("Could not find a _csrf field to use to submit.");
      }
      token = csrf.attr("value");
    } catch (e) {
      csrfError = new Error("Could not find a _csrf field to use to submit.");
      return;
    }

    try {
      const options = $('select[name="hairColorId"] option');
      const option = $(options[Math.floor(options.length * Math.random())]);
      optionValue = option.attr('value');
      optionText = option.text();
    } catch (e) {
      optionError = new Error('Could not find a select dropdown with hairColors to use to submit.');
      return;
    }

    try {
      await request(app)
        .post('/new-person')
        .set('Cookie', cookies)
        .send(`_csrf=${token}`)
        .send(`firstName=${firstName}`)
        .send(`lastName=${lastName}`)
        .send(`biography=${biography}`)
        .send(`age=${age}`)
        .send(`hairColorId=${optionValue}`)
        .expect(302);
    } catch (e) {
      createError = new Error('Could not create a new person to test on the main screen');
    }

  });


  it('returns a 200', done => {
    if (!app) { return done('Cannot read "app" from app.js'); }
    request(app)
      .get('/')
      .set("accept", "html")
      .buffer()
      .parse(htmlCollector)
      .expect((res) => (pageContent = res.body))
      .expect(200, done);
  });

  describe('for an added person, contains a data cell with', () => {
    it('the firstName', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      if (csrfError || optionError || createError) { return expect.fail(csrfError || optionError || createError); }

      const re = new RegExp(`<td[^>]*>\s*${firstName}\s*</td>`);
      expect(re.test(pageContent)).to.equal(true, `Could not find the firstName ${firstName} on the main page.`);
    });
    
    it('the lastName', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      if (csrfError || optionError || createError) { return expect.fail(csrfError || optionError || createError); }

      let namedRow = findNamedRow();
      const lastNameRegex = new RegExp(`<td[^>]*>\s*${lastName}\s*</td>`);

      expect(lastNameRegex.test(namedRow)).to.equal(true, `Could not find the lastName "${lastName}" in the same table row as "${firstName}".`);
    });

    it('the biography', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      if (csrfError || optionError || createError) { return expect.fail(csrfError || optionError || createError); }

      let namedRow = findNamedRow();
      const biographyRegex = new RegExp(`<td[^>]*>\s*${biography}\s*</td>`);

      expect(biographyRegex.test(namedRow)).to.equal(true, `Could not find the biography "${biography}" in the same table row as "${firstName}".`);
    });
    it('the age', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      if (csrfError || optionError || createError) { return expect.fail(csrfError || optionError || createError); }

      let namedRow = findNamedRow();
      const ageRegex = new RegExp(`<td[^>]*>\s*${age}\s*</td>`);

      expect(ageRegex.test(namedRow)).to.equal(true, `Could not find the age "${age}" in the same table row as "${firstName}".`);
    });

    it('the hair color', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      if (csrfError || optionError || createError) { return expect.fail(csrfError || optionError || createError); }

      let namedRow = findNamedRow();
      const optionRegex = new RegExp(`<td[^>]*>\s*${optionText}\s*</td>`);

      expect(optionRegex.test(namedRow)).to.equal(true, `Could not find the hair color "${optionText}" in the same table row as "${firstName}".`);
    });
  });
});
