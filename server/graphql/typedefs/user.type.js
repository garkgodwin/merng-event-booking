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
        createdAt: String!
        updatedAt: String!
    }

    type UsersResponse{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        users: [User!]!
    }
    type UserResponse{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        user: User!
    }
    type TokenResponse{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        token: String!
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
        getUsers: UsersResponse
        getLoggedInData: UserResponse
        login(input: CredentialsInput): TokenResponse
    `;
var mutations = `
        createUser(input: UserInput): NormalResponse
    `;
var typeUser = {
  types,
  queries,
  mutations,
};
module.exports = typeUser;
