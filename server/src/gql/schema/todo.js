const { gql } = require('apollo-server-express');

const todo = gql`
  type Todo {
    id: String!
    title: String!
    textData: String
    createdAt: Int!
  }
`;

module.exports = todo;