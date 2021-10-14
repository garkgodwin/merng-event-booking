import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//?STYLES
import "./index.css";

//?COMPONENT
import App from "./App";

import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
