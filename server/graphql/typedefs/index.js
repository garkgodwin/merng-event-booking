const { buildSchema } = require("graphql");

//*types
const typeUser = require("./user.type");
const typeEvent = require("./event.type");
const typeBooking = require("./booking.type");
//?_common typedef
const typeCommon = require("./_common.type");

var schema = buildSchema(`
    ${typeCommon.types}
    ${typeUser.types}
    ${typeEvent.types}
    ${typeBooking.types}
    
type RootQuery {
    ${typeEvent.queries}
    ${typeUser.queries}
    ${typeBooking.queries}
}

type RootMutation {
    ${typeEvent.mutations}
    ${typeUser.mutations}
    ${typeBooking.mutations}
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

module.exports = schema;
