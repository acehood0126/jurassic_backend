const mongoose = require("mongoose");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: "Username is required",
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: "Email address is required",
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    address: {
      type: String,
      required: "Address is required",
    },
    zip: {
      type: String,
      required: "Zipcode is required",
    },
    price: {
      type: Number,
      required: "Price is required",
    },
    purchaseItems: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("history", productSchema);
