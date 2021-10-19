const db = require("../../models/");
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  //?ONLY ADMIN CAN ACCESS GET USERS
  getUsers: async (args, req) => {
    let response = {
      success: false,
      invalid: false,
      error: false,
      message: "",
      errors: [],
      users: [],
    };
    if (req.isAuth) {
      if (req.userType === 1) {
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
      } else {
        response = {
          ...response,
          invalid: true,
          message: "User is not an admin.",
        };
      }
    } else {
      response = {
        ...response,
        invalid: true,
        message: "User is not logged in!",
      };
    }
    return response;
  },
  getLoggedInData: async (args, req) => {
    if (req.isAuth) {
      //?find user data
      await User.findOne({ _id: req.userId, email: req.email })
        .then((result) => {
          if (result) {
            return result;
          } else {
            throw new Error("No user with such credentials.");
          }
        })
        .catch((error) => {
          if (error.message.includes("Mongo")) {
            let errorMessages = mongooseErrors(error);
            throw new Error(errorMessages);
          }
          throw new Error("Encountered an error while logging in.");
        });
    } else {
      throw new Error("Your credentials are invalid.");
    }
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
    const input = args.input;
    const email = input.email;
    const password = input.password;
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
    if (user && !response.error) {
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
    } else if (!user && !response.error) {
      response = {
        ...response,
        invalid: true,
        message: "User does not exists.",
      };
    }
    return response;
  },
};
