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
  const userInput = args.userInput;
  const nameInput = userInput.nameInput;
  const userType = userInput.userType;
  const email = userInput.email;
  const password = userInput.password;
  return bcrypt
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
