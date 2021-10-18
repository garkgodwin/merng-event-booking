const db = require("../../models/");
const Event = db.events;
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");

module.exports = {
  //?ONLY EVENT MANAGERS USERS CAN CREATE
  createEvent: async (args, req) => {
    let response = {
      success: false,
      invalid: false,
      error: false,
      message: "",
      errors: [],
    };
    if (req.isAuth) {
      if (req.userType === 2) {
        const creator = req.userId; //got from auth middleware
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
                message:
                  "User does not exists! Cannot add event without a user.",
              };
            }
          })
          .then((result) => {
            response = {
              ...response,
              success: true,
              message: "An event is created.",
            };
          })
          .catch((error) => {
            response = {
              ...response,
              error: true,
              message: "An error occurred while creating an event.",
            };
            if (error.name.includes("Mongo")) {
              response = mongooseErrors(error, response);
            }
          });
      } else {
        response = {
          ...response,
          invalid: true,
          message: "User is not a manager.",
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
};
