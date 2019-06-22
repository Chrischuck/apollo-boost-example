const { gql } = require('apollo-server-express');

const query = gql`
  type Query {
    todo(id: Int, limit: Int, offset: Int): [Todo]
  }
`;

module.exports = query;