const todoResolver = require('./todo');

const resolvers = {
  Mutation: {
    ...todoResolver
  }
};

module.exports = resolvers;