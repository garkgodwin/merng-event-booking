var types = `
    type User {
        _id: ID!
        email: String!
        password: String
        createdEvents: [Event!]!
    }

    type UserArrayResponse{
        success: Boolean!,
        invalid: Boolean!,
        error: Boolean!,
        message: String!,
        errors: [String!]!,
        users: [User!]!
    }

    input UserInput{
        email: String!
        password: String!
    }
`;
var queries = `
        getUsers: UserArrayResponse
    `;
var mutations = `
        createUser(userInput: UserInput): NormalResponse
    `;
var typeUser = {
  types,
  queries,
  mutations,
};
module.exports = typeUser;
