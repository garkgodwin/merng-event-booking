import { gql } from "@apollo/client";

export const GET_LOGGED_IN_DATA = gql`
  query {
    getLoggedInData {
      _id
      userType
      name {
        first
        middle
        last
      }
      email
      createdAt
      updatedAt
    }
  }
`;

//TODO: FIX LOGININPUT IMPLEMENTATION
export const LOGIN = gql`
  query login($input: LoginInput!) {
    login(input: $input)
  }
`;
