const {
  //?QUERIES
  getAllUsers,
  getLoggedInData,
  login,
  //?MUTATIONS
  createUser,
} = require("./user.resolvers");
const resolvers = {
  Query: {
    getAllUsers,
    getLoggedInData,
    login,
  },
  Mutation: {
    createUser,
  },
};

module.exports = resolvers;
