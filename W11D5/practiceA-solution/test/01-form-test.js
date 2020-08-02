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

describe('The form page', () => {
  let pageContent = null;

  it("returns a 200", (done) => {
    if (!app) {
      expect.fail('Cannot read "app" from app.js');
    }

    request(app)
      .get('/new-person')
      .set("accept", "html")
      .buffer()
      .parse(htmlCollector)
      .expect((res) => (pageContent = res.body))
      .expect(200, done);
  });

  describe('shows a form', () => {
    it('with a method of "post" and an action of "/new-person"', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag("form", "method", "post");
      expect(pageContent).to.haveTag("form", "action", "/new-person");
    });

    it('with a required firstName text field', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag('[name="firstName"]', "@name", "input");
      expect(pageContent).to.haveTag('[name="firstName"]', "required");
      expect(pageContent).to.haveTag('[name="firstName"]', "type", "text");

    });

    it('with a required lastName text field', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag('[name="lastName"]', "@name", "input");
      expect(pageContent).to.haveTag('[name="lastName"]', "required");
      expect(pageContent).to.haveTag('[name="lastName"]', "type", "text");
    });

    it('with an age number field', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag('[name="age"]', "@name", "input");
      expect(pageContent).to.haveTag('[name="age"]', "type", "number");
    });

    it('with a biography textarea field', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
    
      expect(pageContent).to.haveTag('[name="biography"]', '@name', 'textarea');
    });

    it('with a hairColorId select field', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag('[name="hairColorId"]', '@name', 'select');
      expect(pageContent).to.haveTag('[name="hairColorId"]', "required");

      const options = [
        'Auburn',
        'Black',
        'Blonde',
        'Brown',
        'Other',
        'Red',
        'White'
      ];

      for (let option of options) {
        it(`with the option "${option}"`, () => {
          if (!app) { expect.fail('Cannot read "app" from app.js'); }

          expect(pageContent).to.haveSelectWithOption('[name="hairColorId"]', option);
        });
      }
    });

    it('with a hidden field named _csrf', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag('[name="_csrf"]', "@name", "input");
      expect(pageContent).to.haveTag('[name="_csrf"]', "type", "hidden");

      // it does not have an empty value
      expect(pageContent).to.haveTag('[name="_csrf"]', "value", /.+/);
    });

    it('with a submit button', () => {
      if (!app) { return expect.fail('Cannot read "app" from app.js'); }
      
      expect(pageContent).to.haveTag("button", "type", "submit", true);
    });
  });
});