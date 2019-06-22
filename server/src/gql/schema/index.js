const { makeExecutableSchema } = require('graphql-tools');

const todoSchema = require('./todo');
const querySchema = require('./query');
const mutationSchema = require('./mutation');
const scalar = require('./scalar');

const scalarResolvers = require('../resolvers/scalar');
const queryResolvers = require('../resolvers/query');
const mutationResolvers = require('../resolvers/mutation');

const typeDefs = [
  scalar,
  todoSchema,
  querySchema,
  mutationSchema,
];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: {
    ...queryResolvers,
    ...mutationResolvers,
  }
});