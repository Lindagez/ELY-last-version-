const request = require("supertest");
const app = require("../app");

describe("Test /api/users", () => {
  test("creates a user", () =>
    request(app)
      .post("/api/users")
      .send({
        name: "John Doe",
        email: "john46@gmail.com",
        password: "john123",
      })
      .expect(201)
      .expect("Content-Type", /json/)
      .expect(/John Doe/));

  describe("Get user", () => {
    let user;
    beforeEach(async () => {
      user = (
        await request(app).post("/api/users").send({
          name: "John Doe",
          email: "john46@gmail.com",
          password: "john123",
        })
      ).body;
    });

    
    test("gets a user id", () =>
      request(app)
        .get(`/api/users/${user.id}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(/John Doe/));

    test("Password not included when user returned", async () => {
      const u = await request(app).get(`/api/users/${user.id}`);
      expect(u.body.name).toBe("John Doe");
      expect(u.body.password).toBe(undefined);
    });
  });
});
