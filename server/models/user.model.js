const { Schema, model } = require("mongoose");

const userSchema = Schema({
  userType: {
    //?usertype === 1 is admin | 2 is event managers | 3 is customer
    type: Number,
    min: [1, "Out of range"],
    max: [3, "Out of range"],
    required: "User type is required.",
  },
  fullName: new Schema({
    first: {
      type: String,
      required: "First name is required.",
    },
    middle: String,
    last: {
      type: String,
      required: "Last name is required.",
    },
    prefix: String,
    suffix: String,
    titles: [String],
  }),
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "events",
    },
  ],
});

module.exports = model("users", userSchema);
