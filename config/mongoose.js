//initializing mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

//to connect mongodb using url
async function main() {
  await mongoose.connect("mongodb+srv://rajithsuvarna4:2xgdFE2Pp0yAmzmC@cluster0.402pmdi.mongodb.net/");
}

const db = mongoose.connection;

//to check the mongodb connection
db.once("open", function () {
  console.log("Successfully connected to database");
});

//exporting db
module.exports = db;
