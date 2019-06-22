import React from 'react';
import { graphql, compose } from 'react-apollo';

import query from './gql/todos/todos.query'
import mutation from './gql/todos/todos.mutation'

import VirtualTable from './components/virtualizedTable'

@compose(
  graphql(query),
 graphql(mutation)
)
export default class App extends React.Component {
  render() {
    const { data: { refetch, todo = [] } } = this.props;

    return (
      <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input placeholder="title" />
          <textarea placeholder="text" />
          <button>Create Todo</button>
        </div>
        <VirtualTable
          data={todo}
          rowHeight={50}
        />
      </div>
    )
  }
}
