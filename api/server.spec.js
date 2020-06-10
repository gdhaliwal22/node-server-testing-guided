const request = require("supertest");

const server = require("./server.js");

describe("server.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
  describe("GET /", function() {
    it("should return a 200 OK", function() {
      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("shoild return a JSON", function() {});
  });
});
//spin up the server
//make GET request to /
// look at the http status code for the response
