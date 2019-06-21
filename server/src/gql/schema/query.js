const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    todo(id: ID): [Todo]
  }
`;

module.exports = query;