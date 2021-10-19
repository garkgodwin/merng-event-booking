const db = require("../../models/");
const Event = db.events;
const { mongooseErrors } = require("../../handlers/errorHandlers");

module.exports = {
  getEvents: async (args, req) => {
    let response = {
      success: false, // Boolean!,
      invalid: false, //Boolean!,
      error: false, //Boolean!,
      message: "", //String!,
      errors: [], //[String!]!,
      events: [], //[Event!]!
    };
    await Event.find({})
      .populate("creator")
      .then((events) => {
        response = {
          ...response,
          success: true,
          message: "Fetched events.",
          events: events,
        };
      })
      .catch((error) => {
        response = {
          ...response,
          error: true,
          message: "Encountered an error while fetching events.",
        };
        if (error.name.includes("Mongo")) {
          response = mongooseErrors(error, response);
        }
      });
    return response;
  },
};
