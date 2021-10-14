const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
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
    creator: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("events", eventSchema);
