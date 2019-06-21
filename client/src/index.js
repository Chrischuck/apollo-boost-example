
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import App from './app'

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);