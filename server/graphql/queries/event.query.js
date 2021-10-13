const db = require("../../models/");
const Event = db.events;

const getEvents = () => {
  return Event.find({})
    .then((events) => {
      return events.map((event) => {
        return { ...event._doc };
      });
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = { getEvents };
