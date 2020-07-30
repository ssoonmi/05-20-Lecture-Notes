const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;
var cheerio = require("cheerio");

describe("create-interesting", () => {
  let res, $;
  before(async () => {
    res = await request(app)
      .get("/create-interesting")
      .expect("Content-type", /html/)
      .expect(200);
    $ = cheerio.load(res.text);
  });

  it("renders a form that posts to '/create-interesting'", () => {
    const form = $("form");
    expect(form.length).to.equal(1);
    expect(form.attr("action")).to.equal("/create-interesting");
    expect(form.attr("method")).to.equal("post");
  });

  it("renders a firstName input field", () => {
    expect($("input[type='text'][name='firstName']").length).to.equal(1);
  });

  it("renders a lastName input field", () => {
    expect($("input[type='text'][name='lastName']").length).to.equal(1);
  });

  it("renders a email input field", () => {
    expect($("input[type='email'][name='email']").length).to.equal(1);
  });

  it("renders a password input field", () => {
    expect($("input[type='password'][name='password']").length).to.equal(1);
  });

  it("renders a confirmedPassword input field", () => {
    expect(
      $("input[type='password'][name='confirmedPassword']").length
    ).to.equal(1);
  });

  it("renders a submit input", () => {
    expect($("input[type='submit']").attr("value")).to.equal(
      "Create Interesting User"
    );
  });

  it("renders a hidden input for the csrfToken", () => {
    expect($("input[type='hidden']").attr("name")).to.equal("_csrf");
  });

  it("render an age input field", () => {
    expect($("input[type='number'][name='age']").length).to.equal(1);
  });

  it("renders a select dropdown for favoriteBeatle", () => {
    expect($("select[name='favoriteBeatle']").length).to.equal(1);
    expect($("option[value='']").text()).to.equal(
      "--Please choose an option--"
    );
    expect($("option[value='John']").text()).to.equal("John");
    expect($("option[value='Paul']").text()).to.equal("Paul");
    expect($("option[value='Ringo']").text()).to.equal("Ringo");
    expect($("option[value='George']").text()).to.equal("George");
    expect($("option[value='Scooby-Doo']").text()).to.equal("Scooby-Doo");
  });

  it("renders a checkbox for iceCream", () => {
    expect($("input[type='checkbox'][name='iceCream']").length).to.equal(1);
  });
});
