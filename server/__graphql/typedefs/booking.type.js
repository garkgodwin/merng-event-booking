var types = `
    type Booking{
        event: Event!
        customer: User!
        startDate: String!
        endDate: String!
    }

    input BookingInput{
        event: String!
        customer: String!
        startDate: String!
        endDate: String!
    }

`;

var queries = `
    getBookings: [Booking!]!
`;

var mutations = `
    addBooking(bookingInput: BookingInput): String
`;

var typeBooking = {
  types,
  mutations,
  queries,
};

module.exports = typeBooking;
