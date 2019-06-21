const { makeExecutableSchema } = require('graphql-tools');

const todoSchema = require('./todo');
const querySchema = require('./query');
const queryResolvers = require('../resolvers/query');

const typeDefs = [
  todoSchema,
  querySchema,
];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    ...queryResolvers
  }
});