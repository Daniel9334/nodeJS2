const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ad", adSchema);
