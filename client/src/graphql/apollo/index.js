import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getTokenFromLocal } from "./token";
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer " + getTokenFromLocal(),
  },
});

export default client;
