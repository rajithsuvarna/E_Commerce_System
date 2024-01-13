//Initializing the models
const Product = require("../models/product");
const Productvariant = require("../models/productvariant");

//For creating the Product variants
module.exports.create = async function (req, res) {
  try {
    const opt = await Productvariant.create({
      variant_name: req.body.variantname,
      SKU: req.body.SKU,
      additional_cost: req.body.additionalcost,
      stock_count: req.body.stockcount,
      product: req.params.id,
    });
    const updateOpt = await Productvariant.findByIdAndUpdate(opt._id);
    updateOpt.save();
    const product = await Product.findById(req.params.id);
    if (product) {
      product.productvariants.push(updateOpt);
      product.variantnames.push(updateOpt.variant_name);
      product.save();
      return res.send(product);
    } else {
      res.send("Product does not exists");
    }
    res.send("Product does not exists");
  } catch (err) {
    console.log(err);
    return;
  }
};

//For deleting the product variant
module.exports.delete = async function (req, res) {
  try {
    const productvariant = await Productvariant.findById(req.params.id);
    if (productvariant) {
      const productId = productvariant.product;
      const product = await Product.findByIdAndUpdate(productId, {
        $pull: { productvariants: req.params.id },
        $pull: { variantnames: productvariant.variant_name },
      });
      await Productvariant.findByIdAndDelete(req.params.id);

      res.send("Product variant deleted");
    } else {
      res.send("Id not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
