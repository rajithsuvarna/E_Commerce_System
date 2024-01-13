//setting up the express router
const express = require("express");
const router = express.Router();

//using middleware
router.use("/product", require("./Product"));
router.use("/productvariant", require("./Productvariant"));

//exporting
module.exports = router;
