const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const { mongooseErrors } = require("../../handlers/errorHandlers");

const createUser = async (args) => {
  const userInput = args.userInput;
  const nameInput = userInput.nameInput;
  const userType = userInput.userType;
  const email = userInput.email;
  const password = userInput.password;
  await bcrypt
    .hash(password, 12)
    .then((result) => {
      return User.create({
        userType: userType,
        name: {
          first: nameInput.first,
          middle: nameInput.middle,
          last: nameInput.last,
        },
        email: email,
        password: result,
      });
    })
    .then((result) => {
      return "New user created.";
    })
    .catch((error) => {
      if (error.name.includes("Mongo")) {
        let errorMessages = mongooseErrors(error);
        throw new Error(errorMessages);
      }
      throw new Error("Encountered an error while creating an account.");
    });
};

module.exports = { createUser };
