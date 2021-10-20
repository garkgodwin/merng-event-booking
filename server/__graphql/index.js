const { graphqlHTTP } = require("express-graphql");

//?typedefs
const schema = require("./typedefs"); //NormalResponse is in _common.type.js file

//?queries
const { getEvents } = require("./queries/event.query");
const { getUsers, getLoggedInData, login } = require("./queries/user.query");

//?mutations
const { createEvent } = require("./mutations/event.mutation");
const { createUser } = require("./mutations/user.mutation");

var root = {
  getEvents: getEvents,
  createEvent: createEvent,
  getUsers: getUsers,
  getLoggedInData: getLoggedInData,
  login: login,
  createUser: createUser,
};
const graphql = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  customFormatErrorFn: (err) => {
    if (err.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }
    return err;
  },
});

module.exports = graphql;
