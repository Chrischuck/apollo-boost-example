import React from 'react';
import { graphql, compose } from 'react-apollo';

import query from './gql/todos/todos.query'
import mutation from './gql/todos/todos.mutation'

import VirtualTable from './components/virtualizedTable'

@compose(
  graphql(query, {
    options: {
      variables: {
        limit: 10,
      }
    }
  }),
  graphql(mutation)
)
export default class App extends React.Component {

  fetchMore = () => {
    const { data: { todo = [], fetchMore} } = this.props;

    fetchMore({
      variables: {
        offset: todo.length,
        limit: 10
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          todo: [...prev.todo, ...fetchMoreResult.todo]
        }
      }
    })
  }

  render() {
    const { data: { todo = [], loading } } = this.props;

    return (
      <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <input placeholder="title" />
          <textarea placeholder="text" />
          <button onClick={this.fetchMore}>Create Todo</button>
        </div>
        <VirtualTable
          data={todo}
          rowHeight={100}
          fetchMore={this.fetchMore}

        />
      </div>
    )
  }
}
