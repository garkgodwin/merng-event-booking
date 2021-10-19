import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GET_EVENTS {
    getEvents {
      success
      invalid
      error
      message
      errors
      events {
        _id
        title
        description
        price
        creator {
          name {
            first
            middle
            last
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;
