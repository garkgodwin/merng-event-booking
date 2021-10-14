var types = `
    type Booking{
        event: Event!
        customer: User!
        startDate: String!
        endDate: String!
    }

    type BookingArrayResponse{
        success: Boolean!
        invalid: Boolean!
        error: Boolean!
        message: String!
        errors: [String!]!
        bookings: [Booking!]!
    }

    input BookingInput{
        event: String!
        customer: String!
        startDate: String!
        endDate: String!
    }

`;

var queries = `
    getBookings: BookingArrayResponse
`;

var mutations = `
    addBooking(bookingInput: BookingInput): NormalResponse
`;

var typeBooking = {
  types,
  mutations,
  queries,
};

module.exports = typeBooking;
