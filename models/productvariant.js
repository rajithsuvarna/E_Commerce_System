const mongoose = require("mongoose");

const productvariantSchema = new mongoose.Schema({
  variant_name: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  SKU: {
    type: String,
  },
  additional_cost: {
    type: Number,
    default: 0,
  },
  stock_count: {
    type: Number,
    default: 0,
  },
});

const Productvariant = mongoose.model("Productvariant", productvariantSchema);
module.exports = Productvariant;
