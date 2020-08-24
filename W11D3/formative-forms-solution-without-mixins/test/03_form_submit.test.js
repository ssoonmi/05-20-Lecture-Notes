const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;
var cheerio = require("cheerio");

describe("form-submit", () => {
  let $, token, cookies;
  before(async () => {
    const getRes = await request(app).get("/create");
    cookies = getRes.headers["set-cookie"];
    const getText = cheerio.load(getRes.text);

    token = getText("input[type='hidden'][name='_csrf']").attr("value");
  });

  const submit = async formData => {
    const res = await request(app)
      .post("/create")
      .type("form")
      .set("Cookie", cookies)
      .send({
        _csrf: token,
        ...formData
      });
    $ = cheerio.load(res.text);
  };

  describe("when none of the fields are filled", () => {
    before(async () => {
      await submit({});
    });
    it("render an unordered list of error messages ", () => {
      expect($("p").text()).to.equal("The following errors were found:");
      expect($("ul").length).to.equal(1);
    });

    it("renders li elements for each error message", () => {
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("Please provide a first name.");
      expect(messages.eq(1).text()).to.equal("Please provide a last name.");
      expect(messages.eq(2).text()).to.equal("Please provide an email.");
      expect(messages.eq(3).text()).to.equal("Please provide a password.");
    });
  });

  describe("when only the firstName field is filled", () => {
    let firstName = "Bethany";
    before(async () => {
      await submit({ firstName });
    });
    it("render li elements for each error message ", () => {
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("Please provide a last name.");
      expect(messages.eq(1).text()).to.equal("Please provide an email.");
      expect(messages.eq(2).text()).to.equal("Please provide a password.");
    });

    it("prefills the firstName input value with the submitted firstName value", () => {
      expect($("input[name='firstName']").attr("value")).to.equal(firstName);
    });
  });

  describe("when only the lastName field is filled", () => {
    let lastName = "Tree";
    before(async () => {
      await submit({ lastName });
    });
    it("render li elements for each error message ", () => {
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("Please provide a first name.");
      expect(messages.eq(1).text()).to.equal("Please provide an email.");
      expect(messages.eq(2).text()).to.equal("Please provide a password.");
    });

    it("prefills the lastName input value with the submitted lastName value", () => {
      expect($("input[name='lastName']").attr("value")).to.equal(lastName);
    });
  });

  describe("when only the email field is filled", () => {
    let email = "be.tree@gmail.com";
    before(async () => {
      await submit({ email });
    });
    it("render li elements for each error message ", () => {
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("Please provide a first name.");
      expect(messages.eq(1).text()).to.equal("Please provide a last name.");
      expect(messages.eq(2).text()).to.equal("Please provide a password.");
    });

    it("prefills the email input value with the submitted email value", () => {
      expect($("input[name='email']").attr("value")).to.equal(email);
    });
  });

  describe("when password and confirmedPassword fields do not match", () => {
    before(async () => {
      await submit({
        firstName: "Joe",
        lastName: "North",
        email: "joe@gmail.com",
        password: "abcdefg",
        confirmedPassword: "abc123"
      });
    });
    it("render li elements for each error message ", () => {
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal(
        "The provided values for the password and password confirmation fields did not match."
      );
    });
  });

  describe("when all fields are filled correctly", () => {
    it("redirects user back to home page to see newly created user", async () => {
      const formData = {
        firstName: "Joe",
        lastName: "North",
        email: "joe@gmail.com",
        password: "abcdefg",
        confirmedPassword: "abcdefg"
      };

      await request(app)
        .post("/create")
        .type("form")
        .set("Cookie", cookies)
        .send({
          _csrf: token,
          ...formData
        })
        .expect(302)
        .expect("Location", "/");

      const homeRes = await request(app).get("/");

      $ = cheerio.load(homeRes.text);
      const lastRowCells = $("tr:last-child td");
      // id colummn:
      expect(lastRowCells.eq(0).text()).to.equal(
        $("tbody tr").length.toString()
      );

      // firstName column:
      expect(lastRowCells.eq(1).text()).to.equal(formData.firstName);

      // lastName column:
      expect(lastRowCells.eq(2).text()).to.equal(formData.lastName);

      // email column:
      expect(lastRowCells.eq(3).text()).to.equal(formData.email);
    });
  });
});
