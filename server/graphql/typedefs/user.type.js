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

    input InputName{
        first: String!
        middle: String
        last: String!
    }
    input InputUser{
        userType: Int!
        inputName: InputName!
        email: String!
        password: String!
    }
    input InputCredentials{
        email: String!
        password: String!
    }
`;
var queries = `
        getUsers: ResponseGetUsers
        login(inputCredentials: InputCredentials!): ResponseLogin
        getLoggedInData(token: String!): ResponseLoggedInData
    `;
var mutations = `
        createUser(inputUser: InputUser!): NormalResponse
    `;
var typeUser = {
  types,
  queries,
  mutations,
};
module.exports = typeUser;
