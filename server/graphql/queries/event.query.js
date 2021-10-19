const db = require("../../models/");
const Event = db.events;
const { mongooseErrors } = require("../../handlers/errorHandlers");

module.exports = {
  getEvents: async (args, req) => {
    await Event.find({})
      .populate("creator")
      .then((events) => {
        return events;
      })
      .catch((error) => {
        if (error.name.includes("Mongo")) {
          let errorMessages = mongooseErrors(error);
          throw new Error(errorMessages);
        }
        throw new Error("Encountered an error while fetching events.");
      });
  },
};
