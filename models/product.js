//model to create products
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variantnames: [{ type: String }],
  productvariants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productvariant",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
