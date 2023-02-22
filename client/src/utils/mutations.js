import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!, $firstName: String!, $lastName: String!, $address: String!, $isAdmin: Boolean) {
  addUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName, address: $address, isAdmin: $isAdmin) {
    token
    user {
      _id
      email
    }
  }
}
`;