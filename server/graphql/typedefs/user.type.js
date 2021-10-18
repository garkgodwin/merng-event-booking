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

    type ResponseGetUsers{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        users: [User!]!
    }

    type ResponseLogin{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        token: String!
    }

    type ResponseLoggedInData{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        user: User!
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
        getUsers: ResponseGetUsers
        login(loginInput: LoginInput): ResponseLogin
        getLoggedInData(token: String!): ResponseLoggedInData
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
