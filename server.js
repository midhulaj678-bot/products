
const express = require("express");
const cors = require("cors");
const connectDB = require("./confics/db");

const app = express();
require('dotenv').config()


connectDB()

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;

    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    const data = await response.json();

    res.json({
      products: data.products,
      total: data.total,
      limit: data.limit,
      skip: data.skip,
    });
  } catch (error) {
    res.status(500).json({
      message: " server error",
    });
}
});

let PORT=5000

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
