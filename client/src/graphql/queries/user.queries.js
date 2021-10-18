import { gql } from "@apollo/client";

export const LOGIN = gql`
  query {
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
