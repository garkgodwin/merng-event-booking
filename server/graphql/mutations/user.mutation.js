const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const { mongooseErrors } = require("../../handlers/errorHandlers");

const createUser = (args) => {
  let response = {
    success: false,
    invalid: false,
    error: false,
    message: "",
    errors: [],
  };
  return bcrypt
    .hash(args.userInput.password, 12)
    .then((result) => {
      return User.create({
        email: args.userInput.email,
        password: result,
      });
    })
    .then((result) => {
      return { ...response, success: true, message: "New user created." };
    })
    .catch((error) => {
      if (error.name.includes("Mongo")) {
        response = {
          ...response,
          message: "Encountered an error while creating a user.",
        };
        return mongooseErrors(error, response);
      } else {
        //TODO: ADD MORE ERROR HANDLER (other than mongoservererror)
        return { ...response, error: true, message: error.message };
      }
    });
};

module.exports = { createUser };
