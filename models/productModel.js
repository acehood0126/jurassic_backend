const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product"],
    },
    price: {
      type: Number,
      required: [true, 0],
    },
    img: {
      type: String,
      default: "1.png",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
