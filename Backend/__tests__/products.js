const app = require("../app");
const request = require("supertest");

describe("Test /api/products", () => {
  const product = {
    name: "Mornadi Velvet Bed",
    description:
      "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
    unitPrice: 40,
    stock: 140,
    category: "furniture",
    images: [
      "https://i.dummyjson.com/data/products/31/1.jpg",
      "https://i.dummyjson.com/data/products/31/2.jpg",
    ],
  };

  test("create a new product", () =>
    request(app).post("/api/products").send(product).expect(201));

    
  test("get all products", async () => {
    await request(app).post("/api/products").send(product);
    await request(app)
      .get("/api/products")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(/Mornadi Velvet Bed/);
  });

  test("update a product", async () => {
    const response = await request(app).post("/api/products").send(product);
    const p = response.body;

    await request(app)
      .put(`/api/products/${p.id}`)
      .send({ name: "updated name" })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(/updated name/);
  });

  test("delete a product", async () => {
    const response = await request(app).post("/api/products").send(product);
    const p = response.body;

    await request(app).delete(`/api/products/${p.id}`).expect(204);
  });
});
