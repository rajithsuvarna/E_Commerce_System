//initializing mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//to connect mongodb using url
async function main() {
  await mongoose.connect("mongodb://localhost:27017/E_Commerce_System");
}

const db = mongoose.connection;

//to check the mongodb connection
db.once("open", function () {
  console.log("Successfully connected to database");
});

//exporting db
module.exports = db;
