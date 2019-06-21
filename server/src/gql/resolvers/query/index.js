const todoResolver = require('./todo');

const resolvers = {
  Query: {
    ...todoResolver
  }
};

module.exports = resolvers;