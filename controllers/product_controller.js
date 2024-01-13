//Initializing the models
const Product = require("../models/product");
const Productvariant = require("../models/productvariant");

//For creating the questions
module.exports.create = async function (req, res) {
  try {
    let product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    console.log(err);
    return;
  }
};

//To delete a perticular Question and associated options by its Id
module.exports.deleteQues = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id).clone();
    if (product) {
      await Product.deleteOne(req.params.id).clone();
      await Productvariant.deleteMany({ product: req.params.id }).clone();
      res.send("Question deleted");
    } else {
      res.send("Question does not exists");
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//For showing the question by its id
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
