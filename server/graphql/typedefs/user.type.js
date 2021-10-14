var types = `
    type Name {
        first: String!
        middle: String
        last: String!
    }

    type User {
        _id: ID!
        userType: Int!
        name: Name!
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

    input NameInput{
        first: String!
        middle: String
        last: String!
    }
    input UserInput{
        userType: Int!
        nameInput: NameInput!
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
