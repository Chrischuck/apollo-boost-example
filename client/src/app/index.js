import React from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

import query from './gql/todos/todos.query'

// example of a graphql mutation
const mutation = gql`
  mutation CreateNotTodo($name: String, $description: String) {
    createNotTodo(name: $name, description: $description) {
      name
    }
  }
`

import VirtualTable from './components/virtualizedTable'

@compose(
  graphql(query),
 // graphql(mutation)
)
export default class App extends React.Component {
  render() {
    const { data: { refetch, todo = [] } } = this.props;

    return (
      <div style={{width: '100%', height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <VirtualTable
          data={todo}
          rowHeight={50}
        />
      </div>
    )
  }
}
