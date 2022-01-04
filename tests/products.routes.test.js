import request from "supertest";
import app from "../app.js";
import mongoose from "mongoose";
import Product from "../models/product.js";
import faker from "faker";

beforeAll(async () => {
  const MONGODB_TEST_URI = `mongodb://127.0.0.1/productsTestDatabase`;

  await mongoose.connection.close();

  await mongoose.connect(MONGODB_TEST_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  const products = [...Array(100)].map((item) => {
    return {
      title: faker.commerce.product(),
      img: faker.internet.url(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      category: faker.internet.url(),
    };
  });
  await Product.insertMany(products);
  console.log("Created products!");
});

let productId;

describe("Test the express routes for products", () => {
  it("should show all products", async () => {
    const res = await request(app).get(`/api/products`);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty("_id");
    productId = res.body[0]._id;
  }),
    it("should show a specific product", async () => {
      const res = await request(app).get(`/api/products/${productId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("_id");
    }),
    it("should create a new product", async () => {
      const res = await request(app).post(`/api/products`).send({
        title: "Test Project",
        img: "http://www.testing.com",
        price: "$100",
        description: "http://www.testing.com",
        category: "http://wwwfurniture.testing.com",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("_id");
    });
  it("should update a product", async () => {
    const res = await request(app).put(`/api/products/${productId}`).send({
      title: "Update Test Project",
      img: "http://www.testing.com",
      price: "$100",
      description: "http://www.testing.com",
      category: "furniture",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  }),
    it("should delete a product", async () => {
      const res = await request(app).del(`/api/products/${productId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual("Product was deleted");
    });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});
