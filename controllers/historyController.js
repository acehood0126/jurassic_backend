const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const History = require("../models/historyModel");

// @desc    Get All History
// @route   GET /api/history/
// @access  public
const viewHistory = asyncHandler(async (req, res) => {
  const products = await History.find({});

  res.status(200).json(products);
});

const addHistory = asyncHandler(async (req, res) => {
  const {name, email, address, zip, price, purchaseItems} = req.body;
  console.log(req.body);
  console.log(name, email, address, zip, price, JSON.parse(purchaseItems));

  const history = await History.create({
    name,
    email,
    address,
    zip,
    price,
    purchaseItems: JSON.parse(purchaseItems).map(id => mongoose.Types.ObjectId(id))
  })

  res.status(200).json(history);
})

module.exports = {
  viewHistory,
  addHistory,
};
