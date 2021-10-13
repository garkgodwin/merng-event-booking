const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: {
    type: String,
    required: "Title is required.",
    allowNull: false,
  },
  description: {
    type: String,
    requried: "Description is required.",
    allowNull: false,
  },
  price: {
    type: Number,
    required: "Price is required.",
    allowNull: false,
  },
  date: {
    type: Date,
    required: "Date is required",
    allowNull: false,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("events", eventSchema);
