const {
  //?QUERIES
  getAllUsers,
  getLoggedInData,
  login,
  //?MUTATIONS
  createUser,
} = require("./user.resolvers");

const { getEvents } = require("./event.resolvers");

const resolvers = {
  Query: {
    getAllUsers,
    getLoggedInData,
    login,
    getEvents,
  },
  Mutation: {
    createUser,
  },
};

module.exports = resolvers;
