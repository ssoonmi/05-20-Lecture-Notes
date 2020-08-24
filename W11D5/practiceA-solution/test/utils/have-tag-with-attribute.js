const chai = require('chai');
const cheerio = require('cheerio');

module.exports = (_chai, utils) => {
  const Assertion = chai.Assertion;

  function assertCheckTag(selector, attribute, value, optionalAttribute) {
    const obj = this._obj;

    this.assert(obj, 'No HTML content rendered', 'No HTML content rendered');

    const $ = cheerio.load(obj.toString());

    const selections = $(selector);
    const { '0': selection } = selections;
    let good = true;

    let trueMessage = null;
    let falseMessage = null;

    if (!selection) {
      good = false;
      trueMessage = `Expected HTML to contain a tag selectable with ${selector}`;
      falseMessage = `Expected HTML to not contain a tag selectable with ${selector}`;
    } else if (attribute === '@name' && value) {
      good = selection.name === value;
      trueMessage = `Expected HTML to contain ${selector} with a tag name of ${value}`;
      falseMessage = `Expected HTML to not contain ${selector} with a tag name of ${value}`;
    } else if (attribute && value instanceof RegExp) {
      const attributes = selection.attribs;

      const optionalAndNotPresent = optionalAttribute && !Object.keys(attributes).includes(attribute);
      const attributePresentWithCorrectValue = attributes && attributes[attribute] && value.test(attributes[attribute]);

      good = optionalAndNotPresent || attributePresentWithCorrectValue;

      trueMessage = `Expected HTML to contain ${selector} with ${attribute}="${value}"`;
      falseMessage = `Expected HTML to not contain ${selector} with ${attribute}="${value}"`;
    } else if (attribute && value) {
      const attributes = selection.attribs;

      const optionalAndNotPresent = optionalAttribute && !Object.keys(attributes).includes(attribute);
      const attributePresentWithCorrectValue = attributes && attributes[attribute] && value === attributes[attribute];

      good = optionalAndNotPresent || attributePresentWithCorrectValue;

      trueMessage = `Expected HTML to contain ${selector} with ${attribute}="${value}"`;
      falseMessage = `Expected HTML to not contain ${selector} with ${attribute}="${value}"`;
    } else if (attribute) {
      const attributes = selection.attribs;

      const optionalAndNotPresent = optionalAttribute && !Object.keys(attributes).includes(attribute);
      const attributePresentWithCorrectValue = attributes && Object.keys(attributes).includes(attribute);

      good = optionalAndNotPresent || attributePresentWithCorrectValue;

      trueMessage = `Expected HTML to contain ${selector} with the attribute ${attribute}`;
      falseMessage = `Expected HTML to not contain ${selector} with the attribute ${attribute}`;
    } else {
      good = true;
      trueMessage = `Expected HTML to contain ${selector}`;
      falseMessage = `Expected HTML to not contain ${selector}`;
    }

    this.assert(good, trueMessage, falseMessage);
  }

  Assertion.addMethod('haveTag', assertCheckTag);
};
