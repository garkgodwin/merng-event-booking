var types = `
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }
    input EventInput {
        title: String!
        description: String!
        price: Float!
        creator: String!
    }
    
`;
//?creator: is Schmea.Types.ObjectId = string
//!TODO change back the creator:String to creator:String! to active no nullable input
var queries = `
    getEvents: [Event!]!
`;
var mutations = `
    createEvent(eventInput: EventInput): String
`;
var typeEvent = {
  types,
  mutations,
  queries,
};

module.exports = typeEvent;
