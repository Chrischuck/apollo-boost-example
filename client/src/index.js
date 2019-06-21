
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { ApolloProvider } from 'apollo-boost';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <div >helloooo</div>
  </ApolloProvider>,
  document.getElementById("app")
);