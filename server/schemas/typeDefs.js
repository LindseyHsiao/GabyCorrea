// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create your typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    firstName: String
    lastName: String
    address: String
    isPremium: Boolean
    isAdmin: Boolean
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth 
    addUser(email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;