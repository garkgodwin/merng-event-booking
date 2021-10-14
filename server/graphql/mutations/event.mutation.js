const db = require("../../models/");
const Event = db.events;
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");

const createEvent = (args) => {
  let response = {
    success: false,
    invalid: false,
    error: false,
    message: "",
    errors: [],
  };
  const creator = args.eventInput.creator;
  const event = new Event({
    title: args.eventInput.title,
    description: args.eventInput.description,
    price: +args.eventInput.price,
    date: new Date(args.eventInput.date),
    creator: creator,
  });
  return event
    .save()
    .then((result) => {
      return User.findById(creator);
    })
    .then((user) => {
      if (user) {
        user.createdEvents.push(event);
        return user.save();
      } else {
        response = {
          ...response,
          error: true,
          message: "User does not exists! Cannot add event without a user.",
        };
      }
    })
    .then((result) => {
      response = {
        ...response,
        success: true,
        message: "An event is created.",
      };
      return response;
    })
    .catch((error) => {
      response = {
        ...response,
        error: true,
        message: "An error occurred while creating an event.",
      };
      if (error.name.includes("Mongo")) {
        return mongooseErrors(error, response);
      }
      //TODO: add more error handlers
      return response;
    });
};

module.exports = { createEvent };
