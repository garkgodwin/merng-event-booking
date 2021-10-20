exports.eventTypes = `
    type Event {
        _id: ID
        title: String
        description: String
        price: Float
        creator: User
        createdAt: String
        updatedAt: String
    }
    input EventInput {
        title: String!
        description: String!
        price: Float!
        creator: String!
    }
    
`;
exports.eventQueries = `
    getEvents: [Event!]!
`;
exports.eventMutations = `
    createEvent(eventInput: EventInput): String!
`;
