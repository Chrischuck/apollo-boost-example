import { gql } from 'apollo-boost';
import todoFragment from './todos.fragment';

const mutation = gql`
  mutation CreateTodo($title: String!, $textData: String) {
    todo(title: $title, textData: $textData) {
      ...TodoFragment
    }
  }
  ${todoFragment}
`

export default mutation;