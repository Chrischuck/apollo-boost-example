const { ApolloServer  } = require('apollo-server-express');
const express = require('express');

const schema = require('./gql/schema');

const app = express();

app.get('/', (_, res) => res.send('hello world from express'));

const server = new ApolloServer({
  schema,
  graphqlPath: '/graphql'
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)