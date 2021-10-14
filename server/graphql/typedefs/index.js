const { buildSchema } = require("graphql");

//*types
const typeUser = require("./user.type");
const typeEvent = require("./event.type");
//?_common typedef
const typeCommon = require("./_common.type");

var schema = buildSchema(`
${typeUser.types}
    ${typeEvent.types}
    ${typeCommon.types}
    
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
