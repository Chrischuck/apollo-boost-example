import { gql } from 'apollo-boost';

const fragment = gql`
fragment TodoFragment on Todo {
  id
  title
  textData
}`;

export default fragment;