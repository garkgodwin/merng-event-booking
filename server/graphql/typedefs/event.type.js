var types = `
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
    }
    type EventArrayResponse{
        success: Boolean!,
        invalid: Boolean!,
        error: Boolean!,
        message: String!,
        errors: [String!]!,
        events: [Event!]!
    }
    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: String!
    }
    
`;
//?creator: is Schmea.Types.ObjectId = string
//!TODO change back the creator:String to creator:String! to active no nullable input
var queries = `
    getEvents: EventArrayResponse
`;
var mutations = `
    createEvent(eventInput: EventInput): NormalResponse
`;
var typeEvent = {
  types,
  mutations,
  queries,
};

module.exports = typeEvent;
