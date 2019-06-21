import { gql } from 'apollo-boost';
import todoFragment from './todos.fragment';

const query = gql`
  query GetTodos {
    todo {
      ...TodoFragment
    }
  }
  ${todoFragment}
`

export default query;