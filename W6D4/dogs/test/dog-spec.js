const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Dog = require("../problems/dog.js")

describe("Dog", () => {
    let name = "Prince Maxwell Beasley";
    let max;

    beforeEach("sets up a dog instance", () => {
        max = new Dog(name);
    });

    describe("constructor", () => {
        it("should have a name property", () => {
            expect(max).to.have.property("name");
        })

        it("should set the name property when created", () => {
            expect(max.name).to.eql(name);
        });
    });

    describe("prototype.chainChaseTail", () => {
        context("when a valid number is passed in", () => {
            it("should invoke chaseTail n times", () => {
                const chaseTailSpy = chai.spy.on(max, "chaseTail");
                max.chainChaseTail(3);

                expect(chaseTailSpy).to.have.been.called.exactly(3);
            });
        });

        context("when an invalid number is passed in", () => {
            it("should throw a TypeError", () => {
                expect(() => max.chainChaseTail("cat")).to.throw(TypeError);
            });
        });
    });
});