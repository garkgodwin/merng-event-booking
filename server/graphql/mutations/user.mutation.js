const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");

const createUser = async (args) => {
  let hashed = null;
  await bcrypt
    .hash(args.userInput.password, 12)
    .then((result) => {
      hashed = result;
    })
    .catch((error) => {
      throw error;
    });
  await User.create({
    email: args.userInput.email,
    password: hashed,
  })
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = { createUser };
