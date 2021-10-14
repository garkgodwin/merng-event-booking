const db = require("../../models/");
const Event = db.events;
const { mongooseErrors } = require("../../handlers/errorHandlers");

const getEvents = () => {
  let response = {
    success: false, // Boolean!,
    invalid: false, //Boolean!,
    error: false, //Boolean!,
    message: "", //String!,
    errors: [], //[String!]!,
    events: [], //[Event!]!
  };
  return Event.find({})
    .populate("creator")
    .then((events) => {
      response = {
        ...response,
        success: true,
        message: "Fetched events.",
        events: events,
      };
      return response;
    })
    .catch((error) => {
      response = {
        ...response,
        error: true,
        message: "Encountered an error while fetching events.",
      };
      if (error.name.includes("Mongo")) {
        return mongooseErrors(error, response);
      }
      return response;
    });
};

module.exports = { getEvents };
