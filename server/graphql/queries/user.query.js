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
    if (!res.isAuth) {
      throw new Error("Your credentials are invalid!");
    }
    if (req.userType !== 1) {
      throw new Error("You have no access to this query.");
    }
    await User.find()
      .populate("createdEvents")
      .then((users) => {
        return users;
      })
      .catch((error) => {
        if (error.message.includes("Mongo")) {
          let errorMessages = mongooseErrors(error);
          throw new Error(errorMessages);
        }
        throw new Error("Encountered an error while fetching users.");
      });
  },
  getLoggedInData: async (args, req) => {
    if (req.isAuth === false) {
      throw new Error("Your credentials are invalid.");
    }
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
  },
  login: async (args) => {
    const input = args.input;
    const email = input.email;
    const password = input.password;
    const user = await User.findOne({ email: email })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        if (error.message.includes("Mongo")) {
          let errorMessages = mongooseErrors(error);
          throw new Error(errorMessages);
        }
        throw new Error("Encountered an error while logging in.");
      });
    if (user) {
      const passwordIsValid = await bcrypt.compare(password, user.password);
      if (passwordIsValid) {
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          SECRET_KEY
        );
        return token;
      } else {
        throw new Error("User does not exist.");
      }
    } else {
      throw new Error("User does not exist.");
    }
  },
};
