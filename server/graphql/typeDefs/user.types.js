exports.userTypes = `
    type Name{
        first: String!
        middle: String
        last: String!
    }
    type User{
        _id: ID!
        userType: Int!
        name: Name!
        email: String!
        password: String!
        createdEvents: [Event!]!
        createdAt: String!
        updatedAt: String!
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
    input LoginInput{
        email: String!
        password: String!
    }
`;

exports.userQueries = `
    getAllUsers: [User!]!
    login(input: LoginInput!): String! #token
    getLoggedInData: User!
`;

exports.userMutations = `
    createUser(input:UserInput!):String!
`;
