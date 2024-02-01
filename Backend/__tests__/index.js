const request = require("supertest");
const app = require("../app");


describe("Test the status of the server", () => {
  test("it should return OK", () =>
    request(app)
      .get("/status")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect('{"status":"OK"}'));
});
