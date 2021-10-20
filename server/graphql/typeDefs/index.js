const { gql } = require("apollo-server-express");

//?types
const { userTypes, userQueries, userMutations } = require("./user.types");
const { eventTypes, eventQueries, eventMutations } = require("./event.types");

module.exports = gql`
  ${eventTypes}
  ${userTypes}

  type Query{
    ${userQueries}
    ${eventQueries}
  }

  type Mutation{
    ${userMutations}
    ${eventMutations}
  }
`;
