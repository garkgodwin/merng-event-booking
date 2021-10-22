const db = require("../../models");
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

//?QUERIES
exports.getAllUsers = async (parent, args, req) => {
  if (!req.isAuth) throw new Error("User is authenticated.");
  if (!req.userType !== 1) throw new NotAuthorizedError("User not an admin");
  let users = await User.find()
    .populate("createdEvents")
    .then((result) => {
      if (result) {
        return result;
      } else {
        return [];
      }
    })
    .catch((error) => {
      if (error.message.includes("Mongo")) {
        let errorMessages = mongooseErrors(error);
        throw new Error(errorMessages.join("\n"));
      }
      throw new Error("Encountered an errro while fetching users.");
    });

  return users || [];
};

exports.getLoggedInData = async (parent, args, req, aa) => {
  if (!req.isAuth) throw new Error("User is authenticated.");
  const user = await User.findOne({ _id: req.userId, email: req.email })
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
  return user;
};

exports.login = async (parent, args) => {
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
};

//?MUTATIONS
exports.createUser = async (parent, args) => {
  const input = args.input;
  const name = input.name;
  const userType = input.userType;
  const email = input.email;
  const password = input.password;
  const hashedPassword = await bcrypt
    .hash(password, 12)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Error("Failed to encrypt password.");
    });

  return User.create({
    userType: userType,
    name: {
      first: name.first,
      middle: name.middle,
      last: name.last,
    },
    email: email,
    password: hashedPassword,
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

exports.updateUser = async (parent, args) => {
  if (!req.isAuth) throw new Error("User is unauthenticated.");
  const owner = await User.findById(req.userId)
    .then((result) => {
      if (!result) throw new Error("User does not exist.");
      return result;
    })
    .catch((error) => {
      if (error.name.includes("Mongo")) {
        let errorMessages = mongooseErrors(error);
        throw new Error(errorMessages);
      }
      throw new Error("Encountered an error while creating an account.");
    });

  if (owner) {
    //TODO: FIX THIS UPDATE, ADD TO TO TYPES MUTATIONS
    await User.updateOne({ _id: req.userId }, {});
  }
};
