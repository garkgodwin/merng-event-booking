import { gql } from "@apollo/client";

export const GET_LOGGED_IN_DATA = gql`
  query {
    getLoggedInData {
      success
      invalid
      error
      message
      errors
      user {
        _id
        userType
        name {
          first
          middle
          last
        }
        email
        createdEvents {
          _id
        }
        createdAt
        updatedAt
      }
    }
  }
`;
