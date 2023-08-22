var expect = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/api/cat";
let cat = {
    title: "kitten-unique-3",
    link: "kitten",
    path: "kitten",
    description: "kitten",
};

describe("GET Request", function () {
    it("API works", function (done) {
        request(url, function (_, res) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("Retrieve data from", function (done) {
        request(url, function (_, _, body) {
            // let parse_body = JSON.parse(body);
            expect(body.data).to.be.a("array");
            expect(body.data).to.not.be.empty();
            expect(res.statusCode).to.equal(200);

            done();
        });
    });
});

describe("Add new cat", function () {
    it("insert a cat to database", function (done) {
        request.post({ url: url, form: cat }, function (_, res, body) {
            // let parse_body = JSON.parse(body);
            expect(body.message).to.contain("added");
            expect(res.statusCode).to.equal(201);
            done();
        });
    });
});

describe("Delete a cat", function () {
    it("Delete a cat from database", function (done) {
        request.delete({ url: url, form: cat }, function (_, res, body) {
            // let parse_body = JSON.parse(body);
            expect(body.message).to.contain("removed");
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});
