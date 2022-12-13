const express = require("express");
const router = express.Router();
const {
  viewProducts,
} = require("../controllers/productController");

router.get("/", viewProducts);

module.exports = router;
