const mongoose = require("mongoose");

// Define the schema for the 'owner' collection
const ownerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  products: {
    type: [String], // Assuming products are represented as an array of strings
    default: [],
  },
  gstin: String,
  picture: String,
});

// Create a model based on the schema
const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
