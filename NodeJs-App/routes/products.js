const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

//Requesting All the Products.
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(message.err);
  }
});

//Creating A Product
router.post("/", async (req, res) => {
  console.log(req.body);
  const Product = new Product({
    name: req.body.name,
    stock: req.body.stock,
    name: req.body.price,
    description: req.body.description,
  });
  try {
    const savedProduct = await Product.save();
    res.json(savedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//Requesting Specific Product
router.get("/:ProductId", async (req, res) => {
  try {
    const Product = await Product.findById(req.params.ProductId);
    res.json(Product);
  } catch (err) {
    res.json(err);
  }
});

//Delete a Product
router.delete("/:ProductId", async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.ProductId });
    res.json(removedProduct);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
