import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email {
      _id
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
  _id
  email
  firstName
  lastName
  address
  isPremium
  isAdmin
  }
}
`;

export const QUERY_ME_BASIC = gql`
{
  me {
  _id
  email
  firstName
  lastName
  address
  isPremium
  isAdmin
  }
}
`;