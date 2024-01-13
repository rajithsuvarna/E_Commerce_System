//setting up express server
const express = require("express");
//setting port value 8000
const port = 8000;
const db = require("./config/mongoose");
const app = express();

//using middleware
app.use("/", require("./routes/index"));

//setting the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
