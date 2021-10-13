var types = `
    type NormalResponse {
        success: Boolean!,
        invalid: Boolean!,
        error: Boolean!,
        message: String!,
        errors: [String!]!
    }
`;

var typeCommon = {
  types,
};

module.exports = typeCommon;
