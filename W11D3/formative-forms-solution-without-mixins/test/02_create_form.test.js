const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;
var cheerio = require("cheerio");

describe("create-normal", () => {
  let res, $;
  before(async () => {
    res = await request(app)
      .get("/create")
      .expect("Content-type", /html/)
      .expect(200);
    $ = cheerio.load(res.text);
  });

  it("renders three navigation links", () => {
    const links = $("a");
    expect(links.length).to.equal(3);
  });

  it("renders a navigation link to nagivate to '/'", () => {
    const firstNav = $("a")[0];
    expect($(firstNav).attr("href")).to.equal("/");
  });

  it("renders a navigation link to nagivate to '/create'", () => {
    const firstNav = $("a")[1];
    expect($(firstNav).attr("href")).to.equal("/create");
  });

  it("renders a navigation link to nagivate to '/create-interesting'", () => {
    const secondNav = $("a")[2];
    expect($(secondNav).attr("href")).to.equal("/create-interesting");
  });

  it("renders a form that posts to '/create'", () => {
    const form = $("form");
    expect(form.length).to.equal(1);
    expect(form.attr("action")).to.equal("/create");
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
    expect($("input[type='submit']").attr("value")).to.equal("Create User");
  });

  it("renders a hidden input for the csrfToken", () => {
    expect($("input[type='hidden']").attr("name")).to.equal("_csrf");
  });
});
