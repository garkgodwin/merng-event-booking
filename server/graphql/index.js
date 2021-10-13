const { graphqlHTTP } = require("express-graphql");

//?typedefs
const schema = require("./typedefs");

//?queries
const { getEvents } = require("./queries/event.query");
const { getUsers } = require("./queries/user.query");

//?mutations
const { createEvent } = require("./mutations/event.mutation");
const { createUser } = require("./mutations/user.mutation");

//resolvers
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
});

module.exports = graphql;
