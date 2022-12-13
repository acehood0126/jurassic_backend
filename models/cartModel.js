const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

module.exports = mongoose.model("Cart", userSchema);
