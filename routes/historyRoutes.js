const express = require("express");
const router = express.Router();
const {
  viewHistory,
  addHistory,
} = require("../controllers/historyController");

router.get("/", viewHistory);
router.post("/", addHistory);

module.exports = router;
