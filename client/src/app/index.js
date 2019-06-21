import React from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

const query = gql`
  query GetTodos{
    getTodos {
      name
      description
    }
  }
`

// example of a graphql mutation
const mutation = gql`
  mutation CreateNotTodo($name: String, $description: String) {
    createNotTodo(name: $name, description: $description) {
      name
    }
  }
`

export default class App extends React.Component {
  render() {
    return (
      <div>hellooo</div>
    )
  }
}
