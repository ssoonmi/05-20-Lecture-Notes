const app = require("../index");
const request = require("supertest");
const expect = require("chai").expect;
var cheerio = require("cheerio");

describe("home", () => {
  let res, $;
  before(async () => {
    res = await request(app)
      .get("/")
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

  it("renders an h2 header for the table", () => {
    expect($("h2").text()).to.equal("Existing Users");
  });

  it("renders a table", () => {
    expect($("table").length).to.equal(1);
  });

  it("renders seven th elements with the correct header text", () => {
    const tableHeaders = $("th");
    expect(tableHeaders.length).to.equal(7);
    expect(tableHeaders.eq(0).text()).to.equal("id");
    expect(tableHeaders.eq(1).text()).to.equal("First Name");
    expect(tableHeaders.eq(2).text()).to.equal("Last Name");
    expect(tableHeaders.eq(3).text()).to.equal("Email");
    expect(tableHeaders.eq(4).text()).to.equal("Age");
    expect(tableHeaders.eq(5).text()).to.equal("Favorite Beatle");
    expect(tableHeaders.eq(6).text()).to.equal("Likes Ice Cream");
  });

  it("renders seven td elements", () => {
    expect($("td").length).to.equal(7);
  });

  it("renders the first user in the table", () => {
    const tableCells = $("td");
    expect(tableCells.eq(0).text()).to.equal("1");
    expect(tableCells.eq(1).text()).to.equal("Jill");
    expect(tableCells.eq(2).text()).to.equal("Jack");
    expect(tableCells.eq(3).text()).to.equal("jill.jack@gmail.com");
  });
});
