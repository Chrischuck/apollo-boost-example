import { gql } from 'apollo-boost';
import todoFragment from './todos.fragment';

const query = gql`
  query GetTodos($limit: Int, $offset: Int) {
    todo(limit: $limit, offset: $offset) {
      ...TodoFragment
    }
  }
  ${todoFragment}
`

export default query;