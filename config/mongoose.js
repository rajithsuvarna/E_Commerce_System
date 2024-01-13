const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/E_Commerce_System");
}

const db = mongoose.connection;

db.once("open", function () {
  console.log("Successfully connected to database");
});

module.exports = db;
