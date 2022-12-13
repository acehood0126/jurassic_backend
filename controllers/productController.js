const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc    Get Product List
// @route   GET /api/products/
// @access  public
const viewProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
});

module.exports = {
  viewProducts,
};
