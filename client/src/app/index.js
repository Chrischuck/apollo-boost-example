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
  constructor(props) {
    super()

    this.state = {
      title: '',
      textData: '',
    }
  }

  fetchMore = () => {
    const { data: { todo = [], fetchMore } } = this.props;

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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  mutate = () => {
    const { mutate } = this.props
    const { title, textData } = this.state

    mutate({
      variables: {
        title,
        textData
      },
      updateQueries: {
        GetTodos: (prev, { mutationResult }) => {

          if (!mutationResult) return prev;
          return {
            todo: [...[mutationResult.data.todo], ...prev.todo]
          }
        }
      }
    })

    this.setState({ title: '', textData: '' })
  }

  render() {
    const { data: { todo = [], loading } } = this.props;
    const { title, textData } = this.state

    return (
      <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: 400}}>
          <input style={{marginBottom: 5}} onChange={this.onChange} value={title} name="title" placeholder="title" />
          <textarea style={{marginBottom: 5}} onChange={this.onChange} value={textData} name="textData" placeholder="text" />
          <button style={{marginBottom: 5}} onClick={this.mutate}>Create Todo</button>
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
