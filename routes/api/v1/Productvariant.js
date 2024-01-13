//setting up the express router
const express = require("express");
const router = express.Router();
const productvariantController = require("../../../controllers/productvariant_controller");

router.post("/:id/create", productvariantController.create);
//router.get("/:id/add_vote", optionsController.add_vote);
router.delete("/delete/:id", productvariantController.delete);

//exporting
module.exports = router;
