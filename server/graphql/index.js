const { graphqlHTTP } = require("express-graphql");

//?typedefs
const schema = require("./typedefs"); //NormalResponse is in _common.type.js file

//?queries
const { getEvents } = require("./queries/event.query");
const { getUsers, login } = require("./queries/user.query");

//?mutations
const { createEvent } = require("./mutations/event.mutation");
const { createUser } = require("./mutations/user.mutation");

var root = {
  getEvents: getEvents,
  createEvent: createEvent,
  getUsers: getUsers,
  login: login,
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
