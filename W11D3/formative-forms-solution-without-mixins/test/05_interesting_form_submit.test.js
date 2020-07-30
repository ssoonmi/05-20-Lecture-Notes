const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;
var cheerio = require("cheerio");

describe("submit-interesting", () => {
  let $, token, cookies;
  before(async () => {
    const getRes = await request(app).get("/create-interesting");
    cookies = getRes.headers["set-cookie"];
    const getText = cheerio.load(getRes.text);

    token = getText("input[type='hidden'][name='_csrf']").attr("value");
  });

  const submit = async formData => {
    const res = await request(app)
      .post("/create-interesting")
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

  const formData = {
    firstName: "Millie",
    lastName: "Snopes",
    email: "millie@gmail.com",
    password: "abcdefg2",
    confirmedPassword: "abcdefg2",
    age: 30,
    favoriteBeatle: "John",
    iceCream: "on"
  };

  describe("age field", () => {
    it("renders an error message if age is not submitted", async () => {
      await submit({
        ...formData,
        age: null
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("age is required");
    });

    it("renders an error message if age is not a number", async () => {
      await submit({
        ...formData,
        age: "abc"
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("age must be a valid age");
    });

    it("renders an error message if age is greater than 120", async () => {
      await submit({
        ...formData,
        age: "121"
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("age must be a valid age");
    });

    it("renders an error message if age is less than 0", async () => {
      await submit({
        ...formData,
        age: "-1"
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("age must be a valid age");
    });

    it("prefills the age input value with the submitted age value", async () => {
      await submit({
        ...formData,
        email: null
      });
      expect($("input[name='age']").attr("value")).to.equal(
        formData.age.toString()
      );
    });
  });

  describe("favoriteBeatle field", () => {
    it("renders an error message if favoriteBeatle is not submitted", async () => {
      await submit({
        ...formData,
        favoriteBeatle: null
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal("favoriteBeatle is required");
    });

    it("renders an error message if favoriteBeatle is not a valid member of the Beatles", async () => {
      await submit({
        ...formData,
        favoriteBeatle: "Scooby-Doo"
      });
      const messages = $("li");
      expect(messages.eq(0).text()).to.equal(
        "favoriteBeatle must be a real Beatle member"
      );
    });

    it("marks the submitted favoriteBeatle value as 'selected'", async () => {
      await submit({
        ...formData,
        email: null
      });

      expect($("option[selected='selected']").attr("value")).to.equal(
        formData.favoriteBeatle
      );
    });
  });

  describe("when iceCream field is checked and there is an error with form", () => {
    it("marks the iceCream field as checked", async () => {
      await submit({
        ...formData,
        email: null
      });

      expect($("input[type='checkbox']").attr("checked")).to.equal("checked");
    });
  });

  describe("when all fields are filled correctly", () => {
    it("redirects user back to home page to see newly created user", async () => {
      await request(app)
        .post("/create-interesting")
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

      // age column:
      expect(lastRowCells.eq(4).text()).to.equal(formData.age.toString());

      // favoriteBeatle column:
      expect(lastRowCells.eq(5).text()).to.equal(formData.favoriteBeatle);

      // likes iceCream column:
      expect(lastRowCells.eq(6).text()).to.equal("true");
    });
  });
});
