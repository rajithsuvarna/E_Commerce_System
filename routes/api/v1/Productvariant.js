//setting up the express router
const express = require("express");
const router = express.Router();
const productvariantController = require("../../../controllers/productvariant_controller");

//get,post delete methods for product variants
router.post("/:id/create", productvariantController.create);
router.delete("/delete/:id", productvariantController.delete);

//exporting
module.exports = router;
