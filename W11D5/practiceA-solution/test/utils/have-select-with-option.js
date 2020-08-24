const chai = require('chai');
const cheerio = require('cheerio');

module.exports = (_chai, utils) => {
  const Assertion = chai.Assertion;

  function assertCheckTag(selector, content) {
    const obj = this._obj;
    
    this.assert(obj, 'No HTML content rendered', 'No HTML content rendered');

    const $ = cheerio.load(obj.toString());

    const selections = $(`${selector} option`);

    let good = false;
    let trueMessage = `Expected HTML to contain ${selector} with an option with the content "${content}"`;
    let falseMessage = `Expected HTML to not contain ${selector} with an option with the content "${content}"`;

    for (let i = 0; i < selections.length && !good; i += 1) {
      const option = cheerio.load(selections[i]);
      if (option.text().trim() === content) {
        good = true;
      }
    }

    this.assert(good, trueMessage, falseMessage);
  }

  Assertion.addMethod('haveSelectWithOption', assertCheckTag);
};
