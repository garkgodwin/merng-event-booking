var types = `
    type User {
        _id: ID!
        email: String!
        password: String
    }

    input UserInput{
        email: String!
        password: String!
    }
`;
var queries = `
        users: [User!]!
    `;
var mutations = `
        createUser(userInput: UserInput): User 
    `;
var typeUser = {
  types,
  queries,
  mutations,
};
module.exports = typeUser;
