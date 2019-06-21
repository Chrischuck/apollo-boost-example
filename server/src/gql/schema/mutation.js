const { gql } = require('apollo-server-express');

const mutation = gql`
  type Mutation {
    todo(title: String!, textData: String): Todo
  }
`;

module.exports = mutation;