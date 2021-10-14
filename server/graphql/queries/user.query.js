const db = require("../../models/");
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");

const getUsers = () => {
  let response = {
    success: false,
    invalid: false,
    error: false,
    message: "",
    errors: [],
    users: [],
  };
  return User.find({})
    .populate("createdEvents")
    .then((users) => {
      response = {
        ...response,
        success: true,
        message: "Fetched users.",
        users: users,
      };
      return response;
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
      return response;
    });
};

module.exports = { getUsers };
