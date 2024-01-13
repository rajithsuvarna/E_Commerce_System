//Initializing the models
const Product = require("../models/product");
const Productvariant = require("../models/productvariant");

//For creating the Products
module.exports.create = async function (req, res) {
  try {
    let product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    console.log(err);
    return;
  }
};

//To delete a perticular Products and associated Products variants by its Id
module.exports.deleteQues = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id).clone();
    if (product) {
      await Product.deleteOne(req.params.id).clone();
      await Productvariant.deleteMany({ product: req.params.id }).clone();
      res.send("Product deleted");
    } else {
      res.send("Product does not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//For showing the Products by its id
module.exports.showProduct = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id).populate(
      "productvariant"
    );
    if (product) {
      res.send(product);
    } else {
      res.send("Id does not exits");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//To show all the Products
module.exports.showAllProducts = async function (req, res) {
  try {
    const product = await Product.find({}).populate("productvariants");
    if (product) {
      res.send(product);
    } else {
      res.send("Id does not exits");
    }
  } catch (err) {
    console.log(muerr);
    return;
  }
};

//To search the products by name, description, and variant name
module.exports.Search = async function (req, res) {
  try {
    const product = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { description: { $regex: req.params.key } },
        { variantnames: { $regex: req.params.key } },
      ],
    }).populate("productvariants");
    if (product) {
      res.send(product);
    } else {
      res.send("Id does not exits");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
