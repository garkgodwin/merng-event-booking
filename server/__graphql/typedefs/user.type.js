var types = `
    type Name {
        first: String
        middle: String
        last: String
    }

    type User {
        _id: ID
        userType: Int
        name: Name
        email: String
        password: String
        createdEvents: [Event!]
        createdAt: String
        updatedAt: String
    }

    input NameInput{
        first: String!
        middle: String
        last: String!
    }

    input UserInput{
        userType: Int!
        name: NameInput!
        email: String!
        password: String!
    }
    input CredentialsInput{
        email: String!
        password: String!
    }
`;
var queries = `
        getUsers: [User!]!
        getLoggedInData: User
        login(input: CredentialsInput): String!
    `;
var mutations = `
        createUser(input: UserInput): String!
    `;
var typeUser = {
  types,
  queries,
  mutations,
};
module.exports = typeUser;
