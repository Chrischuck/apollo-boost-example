const { makeExecutableSchema } = require('graphql-tools');

const todoSchema = require('./todo');
const querySchema = require('./query');
const mutationSchema = require('./mutation');

const queryResolvers = require('../resolvers/query');
const mutationResolvers = require('../resolvers/mutation');

const typeDefs = [
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