const { buildSchema } = require("graphql");

//?types
const typeUser = require("./user.type");
const typeEvent = require("./event.type");

var schema = buildSchema(`
    ${typeEvent.types}
    ${typeUser.types}
    
type RootQuery {
    ${typeEvent.queries}
    ${typeUser.queries}
}

type RootMutation {
    ${typeEvent.mutations}
    ${typeUser.mutations}
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

module.exports = schema;
