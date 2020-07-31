const { expect } = require('chai');
const cheerio = require('cheerio');
const request = require('supertest');

const { app } = require('../app.js');

async function htmlCollector(res, callback) {
  let data = '';
  for await (let chunk of res) {
    data += chunk;
  }
  callback(null, data);
}

describe('The form page', () => {
  describe('shows a form', () => {
    it('with a method of "post" and an action of "/new-person"', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': form} = $('form');
          expect(form).to.not.equal(undefined, 'Could not find a "form" tag');
          const { method, action } = form.attribs;
          expect(method).to.not.equal(undefined, 'Could not find a "method" attribute for the form element');
          expect(action).to.not.equal(undefined, 'Could not find an "action" attribute for the form element');
          expect(method.toLowerCase()).to.equal('post', 'Form does not seem to POST');
          expect(action).to.equal('/new-person', 'Form does not seem to have the action "/new-person"');
        })
        .expect(200, done);
    });
    it('with a required firstName text field', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': firstName} = $('[name="firstName"]');
          expect(firstName).to.not.equal(undefined, 'Could not find a "firstName" input');
          expect(firstName).to.have.property('name', 'input');
          expect(firstName.attribs).to.have.property('type', 'text');

          const required = firstName.attribs && firstName.attribs.required;
          expect(['required', '']).to.contain(required, 'Field "firstName" does not appear to be required');
        })
        .expect(200, done);
    });

    it('with a required lastName text field', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': lastName} = $('[name="lastName"]');
          expect(lastName).to.not.equal(undefined, 'Could not find a "lastName" input');
          expect(lastName.attribs).to.have.property('type', 'text');
          expect(lastName).to.have.property('name', 'input');

          const required = lastName.attribs && lastName.attribs.required;
          expect(['required', '']).to.contain(required, 'Field "lastName" does not appear to be required');        })
        .expect(200, done);
    });

    it('with an age number field', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': age} = $('[name="age"]');
          expect(age).to.not.equal(undefined, 'Could not find a "age" input');
          expect(age).to.have.property('name', 'input');
          expect(age.attribs).to.have.property('type', 'number');
        })
        .expect(200, done);
    });

    it('with a biography textarea field', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': biography} = $('[name="biography"]');
          expect(biography).to.not.equal(undefined, 'Could not find a "biography" input');
          expect(biography).to.have.property('name', 'textarea');
        })
        .expect(200, done);
    });

    it('with a hairColorId select field', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': hairColorId} = $('[name="hairColorId"]');
          expect(hairColorId).to.not.equal(undefined, 'Could not find a "hairColorId" input');
          expect(hairColorId).to.have.property('name', 'select');
          expect(hairColorId.children).to.have.length(7, 'Did not have seven options as specified in the requirements');

          const required = hairColorId.attribs && hairColorId.attribs.required;
          expect(['required', '']).to.contain(required, 'Field "hairColorId" does not appear to be required');
        })
        .expect(200, done);
    });

    it('with a hidden field named _csrf', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': csrfToken} = $('[name="_csrf"]');
          expect(csrfToken).to.not.equal(undefined, 'Could not find a "_csrf" input');
          expect(csrfToken).to.have.property('name', 'input');
          expect(csrfToken.attribs).to.have.property('type', 'hidden', '_csrf does not appear to be a hidden field');
        })
        .expect(200, done);
    });

    it('with a submit button', done => {
      if (!app) { return done('Cannot read "app" from app.js'); }
      request(app)
        .get('/new-person')
        .set('accept', 'html')
        .buffer()
        .parse(htmlCollector)
        .expect(res => {
          const $ = cheerio.load(res.body);
          const {'0': button} = $('form button');
          expect(button).to.not.equal(undefined, 'Could not find a "button" as a child of the form');
          if (button.attribs && button.attribs.type && button.attribs.type.toLowerCase() !== 'submit') {
            expect.fail('The button for your form does not appear to be a submit button');
          }
        })
        .expect(200, done);
    });
  });
});

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
