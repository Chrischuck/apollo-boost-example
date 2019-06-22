const { gql } = require('apollo-server-express');

const todo = gql`
  type Todo {
    id: ID!
    title: String!
    textData: String
    createdAt: Date!
    updatedAt: Date
  }
`;

module.exports = todo;