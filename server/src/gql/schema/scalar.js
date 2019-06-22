const { gql } = require('apollo-server-express');

const scalar = gql`
  scalar Date
`;

module.exports = scalar;