//setting up the express router
const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/product_controller");

//get,post delete methods for products
router.post("/create", productController.create);
router.get("/view/:id", productController.showProduct);
router.get("/viewall", productController.showAllProducts);
router.get("/search/:key", productController.Search);
router.delete("/delete/:id", productController.deleteQues);

//using middleware
router.use("/productvariant", require("./Productvariant"));

//exporting
module.exports = router;
