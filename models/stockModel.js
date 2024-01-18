const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stock: {
    type: String,
    require: true,
    trim: true,
    uppercase: true
  },
  price: Number,
  favourite: {
    type: [String]
  }
});

const stock = mongoose.model("Stock", stockSchema);

module.exports = stock;
