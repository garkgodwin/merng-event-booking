const db = require("../../models/");
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  getUsers: async () => {
    let response = {
      success: false,
      invalid: false,
      error: false,
      message: "",
      errors: [],
      users: [],
    };
    await User.find()
      .populate("createdEvents")
      .then((users) => {
        response = {
          ...response,
          success: true,
          message: "Fetched users.",
          users: users,
        };
      })
      .catch((error) => {
        response = {
          ...response,
          error: true,
          message: "Encountered an error while fetching users.",
        };
        if (error.name.includes("Mongo")) {
          return mongooseErrors(error, response);
        }
      });
    return response;
  },
  login: async (args) => {
    let response = {
      success: false,
      invalid: false,
      error: false,
      message: "",
      errors: [],
      token: "",
    };
    const loginInput = args.loginInput;
    const email = loginInput.email;
    const password = loginInput.password;
    const user = await User.findOne({ email: email })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        response = {
          ...response,
          error: true,
          message: "Encountered an error while logging in.",
        };
        response = mongooseErrors(error, response);
      });
    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (passwordIsValid) {
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          SECRET_KEY
        );
        response = {
          ...response,
          success: true,
          message: "Login successful.",
          token: token,
        };
      } else {
        response = {
          ...response,
          invalid: true,
          message: "User does not exists.",
        };
      }
    } else {
      response = {
        ...response,
        invalid: true,
        message: "User does not exists.",
      };
    }
    return response;
  },
};
