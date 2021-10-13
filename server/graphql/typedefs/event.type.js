var types = `
    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
    }
    
`;
var mutations = `
        createEvent(eventInput: EventInput): Event
    `;
var queries = `
        events: [Event!]!
    `;
var typeEvent = {
  types,
  mutations,
  queries,
};

module.exports = typeEvent;
