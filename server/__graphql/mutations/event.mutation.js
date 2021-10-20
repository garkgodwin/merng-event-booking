const db = require("../../models");
const Event = db.events;
const User = db.users;
const { mongooseErrors } = require("../../handlers/errorHandlers");

module.exports = {
  //?ONLY EVENT MANAGERS USERS CAN CREATE
  createEvent: async (args, req) => {
    //TODO: FIX THIS
    if (!req.isAuth) throw new Error("Not logged in.");
    if (req.userType !== 2) throw new Error("User is not a manager.");
    const creator = req.userId; //!got from auth middleware
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: creator,
    });
    return event
      .save() //?SAVE EVENT
      .then((result) => {
        return User.findById(creator); //?FIND CREATOR
      })
      .then((user) => {
        if (user) {
          user.createdEvents.push(event); //?SAVE EVENT ID TO USER CREATED EVENTS
          return user.save();
        } else {
          throw new Error(
            "User does not exist! Cannot add event without a user."
          );
        }
      })
      .then((result) => {
        return "An event is created!";
      })
      .catch((error) => {
        if (error.name.includes("Mongo")) {
          let errorMessages = mongooseErrors(error);
          throw new Error(errorMessages);
        }
        throw new Error("An error occurred while creating an event.");
      });
  },
};
