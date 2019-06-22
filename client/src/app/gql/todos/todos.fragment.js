import { gql } from 'apollo-boost';

const fragment = gql`
fragment TodoFragment on Todo {
  id
  title
  textData
  createdAt
}`;

export default fragment;