const { graphqlHTTP } = require("express-graphql");

//?typedefs
const schema = require("./typedefs"); //NormalResponse is in _common.type.js file

//?queries
const { getEvents } = require("./queries/event.query");
const { getUsers } = require("./queries/user.query");

//?mutations
const { createEvent } = require("./mutations/event.mutation");
const { createUser } = require("./mutations/user.mutation");

var root = {
  events: getEvents,
  createEvent: createEvent,
  users: getUsers,
  createUser: createUser,
};
const graphql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  customFormatError: (err) => {
    return {
      success: false,
      invalid: false,
      error: true,
      message: err.message,
      errros: [],
    };
  },
});

module.exports = graphql;
