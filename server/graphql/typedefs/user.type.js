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

    type UserLoginResponse{
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
        nameInput: NameInput!
        email: String!
        password: String!
    }
    input LoginInput{
        email: String!
        password: String!
    }
`;
var queries = `
        getUsers: UsersResponse
        login(loginInput: LoginInput): UserLoginResponse
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
