const db = require("../../models");
const Event = db.events;

exports.getEvents = async (args, req) => {
  const events = await Event.find()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      if (error.message.includes("Mongo")) {
        let errorMessages = mongooseErrors(error);
        throw new Error(errorMessages);
      }
      throw new Error("Encountered an error while fetching events.");
    });

  return events || [];
};
