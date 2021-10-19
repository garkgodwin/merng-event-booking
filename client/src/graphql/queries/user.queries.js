import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login {
    login(
      loginInput: {
        email: "garkgodwinduque@gmail.com"
        password: "password123"
      }
    ) {
      success
      invalid
      error
      message
      errors
      token
    }
  }
`;

export const GET_LOGGED_IN_DATA = gql`
  query GET_LOGGED_IN_DATA {
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
